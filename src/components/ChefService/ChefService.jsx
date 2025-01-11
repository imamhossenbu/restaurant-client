import React from 'react';
import ChefServiceImg from '../../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div
            className="max-w-5xl mx-auto flex justify-center items-center"
            style={{
                backgroundImage: `url(${ChefServiceImg})`,
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-[80%] bg-white text-center p-6 rounded-md">
                <h2 className="uppercase text-lg font-bold mb-4">Bistro Boss</h2>
                <p>
                    Discover exceptional culinary experiences with our chef services, where passion meets precision. From handcrafted dishes to personalized menus, we bring flavor and creativity to your table, ensuring every meal is a memorable journey of taste and elegance. Let us elevate your dining experience with unparalleled quality and attention to detail.
                </p>
            </div>
        </div>
    );
};

export default ChefService;
