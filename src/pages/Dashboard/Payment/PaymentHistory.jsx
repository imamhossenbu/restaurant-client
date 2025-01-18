import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaTrash } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SEctionTitle';

const PaymentHistory = () => {
    const [payment, setPayment] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    console.log(payment);
    useEffect(() => {
        axiosSecure.get(`/payment/${user?.email}`)
            .then(res => {
                setPayment(res.data);
            })
    }, [])

    return (
        <div>
            <div>
                <SectionTitle subheading={'At a Glance'} heading={'payment history'}></SectionTitle>
                <div className="overflow-x-auto my-4 max-w-4xl mx-auto bg-white p-4 shadow-lg rounded-lg">
                    <h1 className='text-2xl font-bold'>Total Payments: {payment.length}</h1>
                    <table className="table-auto w-full text-left border-collapse">
                        {/* Table Head */}
                        <thead className='bg-[#D1A054] text-white'>
                            <tr className='uppercase'>
                                <th className='p-3'>

                                </th>
                                <th className='p-3'>Name</th>
                                <th className='p-3'>Email</th>
                                <th className='p-3'>Price</th>
                                <th className='p-3'>Status</th>
                                <th className='p-3'>Transaction</th>

                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {payment.map((item, index) => {
                                return (
                                    <tr key={item._id} className='border-b hover:bg-gray-100'>
                                        <td className='p-3 font-bold'>{index + 1}</td>  {/* Increasing number here */}

                                        <td className='p-3'>
                                            {item.name}
                                        </td>
                                        <td className='p-3'>{item.email}</td>
                                        <td className='p-3'>${item.price}</td>
                                        <td className='p-3'>
                                            {item.status}
                                        </td>
                                        <td className='p-3'>
                                            {item.transactionId}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;