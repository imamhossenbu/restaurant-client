import React from 'react';
import slide1 from "../../assets/home/slide1.jpg"
import SectionTitle from '../../components/SectionTitle/SEctionTitle';

const RecommendMenu = () => {
    return (
        <div className='max-w-5xl mx-auto my-20 px-4'>
            <div className='bg-black text-white h-[130px] flex justify-center items-center mb-20'>
                <h1 className=' text-3xl font-bold'>Call Us: +8801624-994532</h1>
            </div>
            <div>
                <SectionTitle
                    subheading={"Should Try"}
                    heading={"Chef Recommends"}

                ></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border text-center pb-4 bg-gray-100">
                    <img src={slide1} alt="Caeser Salad" className="w-full h-48 object-cover" />
                    <h2 className="text-xl font-semibold mt-4">Caeser Salad</h2>
                    <p className="text-sm text-gray-600">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="mt-4">
                        <button className=" bg-gray-300 border-b-2 border-yellow-700 hover:border-none text-yellow-600 px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300">ADD TO CART</button>
                    </div>
                </div>
                <div className="border text-center pb-4 bg-gray-100">
                    <img src={slide1} alt="Caeser Salad" className="w-full h-48 object-cover " />
                    <h2 className="text-xl font-semibold mt-4">Caeser Salad</h2>
                    <p className="text-sm text-gray-600">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="mt-4">
                        <button className=" bg-gray-300 border-b-2 border-yellow-700 hover:border-none text-yellow-600 px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300">ADD TO CART</button>
                    </div>
                </div>
                <div className="border text-center pb-4 bg-gray-100 ">
                    <img src={slide1} alt="Caeser Salad" className="w-full h-48 object-cover" />
                    <h2 className="text-xl font-semibold mt-4">Caeser Salad</h2>
                    <p className="text-sm text-gray-600">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="mt-4">
                        <button className=" bg-gray-300 border-b-2 border-yellow-700 hover:border-none text-yellow-600 px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendMenu;