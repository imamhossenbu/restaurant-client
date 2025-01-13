import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-sm mt-20">
            {/* Contact and Social Links Section */}
            <div className="grid grid-cols-4  border-b border-gray-700">
                <div className="bg-gray-800 py-10">

                </div>
                {/* Contact Us Section */}
                <div className="mb-8 bg-gray-800 md:mb-0 text-center py-10">
                    <h3 className="text-white text-lg font-semibold mb-4">CONTACT US</h3>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

                {/* Social Links Section */}
                <div className="text-center py-10">
                    <h3 className="text-white text-lg font-semibold mb-4">Follow US</h3>
                    <p className="mb-4">Join us on social media</p>
                    <div className="flex justify-center space-x-6">
                        <FaFacebook className="text-white hover:text-gray-400 cursor-pointer" size={20} />
                        <FaInstagram className="text-white hover:text-gray-400 cursor-pointer" size={20} />
                        <FaTwitter className="text-white hover:text-gray-400 cursor-pointer" size={20} />
                    </div>
                </div>
                <div>

                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-black text-center py-4">
                <p className="text-white">
                    Copyright © CulinaryCloud. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
