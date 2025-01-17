import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const MenuCart = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, image, recipe, price,_id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure=useAxiosSecure();
    const [cart, refetch] = useCart();

    const handleAddToCart = (food) => {
        if (user && user.email) {
            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                image,
                recipe,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Added to Cart",
                        text: "Item added to cart successfully",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK"
                    });
                    refetch();
                }
            })


        }
        else {
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
                    navigate('/login' ,{state:{from:location}})
                }
            });
        }
    }


    return (
        <div className="border flex flex-col transform transition-all duration-300 hover:scale-105 justify-between text-center pb-4 bg-gray-100 h-full relative">
            {/* Price Badge */}
            <div className="absolute top-2 left-2 bg-yellow-700 text-white px-3 py-1 text-sm font-semibold rounded-md">
                ${price}
            </div>

            {/* Image Section */}
            <img src={image} alt={name} className="w-full h-48 object-cover" />

            {/* Content Section */}
            <div className="flex-grow px-3">
                <h2 className="text-xl font-semibold mt-4">{name}</h2>
                <p className="text-sm text-gray-600">{recipe}</p>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-4">
                <button onClick={() => handleAddToCart(item)} className="bg-gray-300 border-b-2 border-yellow-700 hover:border-none text-yellow-600 px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default MenuCart;
