import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
    const axiosSecurePublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const location= useLocation();
    const navigate= useNavigate();
    const {name,price,category,recipe,_id}=location.state.item;

    const { register, handleSubmit, reset } = useForm();



    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };
        try {
            const res = await axiosSecurePublic.post(image_hosting_api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res.data.status === 200) {
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url,
                };

                const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
                if (menuRes.data.modifiedCount) {
                    Swal.fire({
                        title: 'Updated!',
                        text: 'Your item has been updated.',
                        icon: 'success',
                    });
                    navigate('/dashboard/manage-items');
                    
                } else {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'Failed to update item.',
                        icon: 'error',
                    });
                }
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    return (
        <div>
            <div className="py-6 px-4">
                <div className="max-w-3xl mx-auto bg-white px-16 py-10 shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-4 mb-6">
                            <div className="w-full">
                                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                                    Recipe Name*
                                </label>
                                <input
                                    {...register('name')}
                                    type="text"
                                    id="name"
                                    name="name"
                                    defaultValue={name}
                                    className="w-full px-4 py-2 border rounded-sm"
                                    placeholder="Recipe Name"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="category" className="block text-sm font-semibold mb-2">
                                    Category*
                                </label>
                                <select
                                    {...register('category')}
                                    id="category"
                                    name="category"
                                    defaultValue={category}
                                    className="w-full px-4 py-2 border rounded-sm"
                                    required
                                >
                                    <option value="salad">Salad</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="popular">Popular</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="offered">Offered</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="price" className="block text-sm font-semibold mb-2">
                                Price*
                            </label>
                            <input
                                {...register('price')}
                                type="number"
                                id="price"
                                step="any"
                                name="price"
                                defaultValue={price}
                                className="w-full px-4 py-2 border rounded-sm"
                                placeholder="Price"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="recipe" className="block text-sm font-semibold mb-2">
                                Recipe Details*
                            </label>
                            <textarea
                                {...register('recipe')}
                                id="recipe"
                                name="recipe"
                                rows="8"
                                defaultValue={recipe}
                                className="w-full px-4 py-2 border rounded-sm"
                                placeholder="Recipe Details"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="image" className="block text-sm font-semibold mb-2">
                                Upload Image
                            </label>
                            <input
                                {...register('image')}
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="w-full px-4 py-2 border rounded-sm"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="flex cursor-pointer items-center justify-center px-6 py-3 bg-yellow-700 text-white rounded-sm hover:bg-yellow-500 transition duration-300"
                            >
                                Update Recipe Details
                                <FaUtensils className="ml-2" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItems;
