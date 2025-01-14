import React from 'react';
import Cover from '../../shared/Cover';
import contactImg from '../../assets/contact/banner.jpg';

import { IoCall, IoTime } from "react-icons/io5";
import { FaLocationDot } from 'react-icons/fa6';
import ContactForm from './ContactForm';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';

const ContactUs = () => {
    return (
        <div>
            <Cover img={contactImg} subtitle={'Contact with us'} title={'Contact Us'} />
            <SectionTitle subheading={'Visit Us'} heading={'Our Location'} />

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4  py-10 max-w-5xl mx-auto'>
                {/* Phone Section */}
                <div className="text-center border border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col justify-center items-center py-4 bg-[#D1A054] text-white rounded-t-lg">
                        <IoCall size={25} />
                    </div>
                    <div className="mx-4 bg-gray-50 py-6 rounded-b-lg">
                        <h2 className="uppercase text-lg font-semibold mb-4">Phone</h2>
                        <p className="text-sm text-gray-700">+8801624994532</p>
                    </div>
                </div>

                {/* Address Section */}
                <div className="text-center border border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col justify-center items-center py-4 bg-[#D1A054] text-white rounded-t-lg">
                        <FaLocationDot size={25} />
                    </div>
                    <div className="mx-4 bg-gray-50 py-6 rounded-b-lg">
                        <h2 className="uppercase text-lg font-semibold mb-4">Address</h2>
                        <p className="text-sm text-gray-700">Barisal, Bangladesh</p>
                    </div>
                </div>

                {/* Working Hours Section */}
                <div className="text-center border border-gray-300 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col justify-center items-center py-4 bg-[#D1A054] text-white rounded-t-lg">
                        <IoTime size={25} />
                    </div>
                    <div className="mx-4 bg-gray-50 py-6 rounded-b-lg">
                        <h2 className="uppercase text-lg font-semibold mb-4">Working Hours</h2>
                        <p className="text-sm text-gray-700">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-sm text-gray-700">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>

            </div>
            <SectionTitle subheading={'Send Us a Message'} heading={'Contact form'}></SectionTitle>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;
