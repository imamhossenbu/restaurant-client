import React, { useContext } from 'react';
import menuData from '../../../public/menuData.json';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import Swal from 'sweetalert2';

const RecommendMenu = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart(); // Destructure only refetch

    const handleAddToCart = (food) => {
        if (user && user.email) {
            const cartItem = {
                menuId: food.id,
                email: user.email,
                name: food.name,
                image: food.image,
                recipe: food.recipe,
                price: food.price
            };
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Added to Cart",
                            text: "Item added to cart successfully",
                            icon: "success",
                            confirmButtonColor: "#3085d6",
                            confirmButtonText: "OK"
                        });
                        refetch();
                    }
                });
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className='max-w-5xl mx-auto my-20 px-4'>
            <div className='bg-black text-white h-[130px] flex justify-center items-center mb-20'>
                <h1 className='text-3xl font-bold'>Call Us: +8801624-994532</h1>
            </div>
            <div>
                <SectionTitle
                    subheading={"Should Try"}
                    heading={"Chef Recommends"}
                ></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {menuData.map((item) => (
                    <div
                        key={item.id}
                        className="border text-center pb-4 transform transition-all duration-300 hover:scale-105 bg-gray-100"
                    >
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
                        <p className="text-sm text-gray-600">{item.recipe}</p>
                        <p className="text-lg font-semibold mt-2">${item.price.toFixed(2)}</p>
                        <div className="mt-4">
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="bg-gray-300 border-b-2 border-yellow-700 hover:border-none text-yellow-600 px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300"
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecommendMenu;
