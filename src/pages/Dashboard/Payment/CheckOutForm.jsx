import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const [cart,refetch] = useCart();
    const [clientSecret, setClientSecret] = useState('');
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const navigate=useNavigate();


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.error('Payment error:', error);
            setError(error.message);
        } else {
            console.log('Payment successful:', paymentMethod);
            setError('');
        }


        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user.displayName || 'anonymous',
                    email: user.email || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('Confirm error', error);
        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    name: user.displayName,
                    email: user.email,
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    cartId: cart.map(item => item._id),
                    menuId: cart.map(item => item.menuId),
                    date: new Date(),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payment', payment);
                console.log(res.data);
                refetch();
                if(res.data.paymentResult.insertedId){
                    toast.success('Payment Successful');
                    navigate('/order/salad')
                }

            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    Checkout
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Details
                        </label>
                        <div className="border border-gray-300 p-3 rounded-md focus-within:ring-2 focus-within:ring-indigo-500">
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <p className='text-red-600'>{error}</p>
                    <button
                        type="submit"
                        disabled={!stripe || !clientSecret}
                        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        Pay
                    </button>
                </form>
                {transactionId && <p>Your TransactionId is: {transactionId}</p>}
            </div>
        </div>
    );
};

export default CheckOutForm;
