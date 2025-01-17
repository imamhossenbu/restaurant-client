import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const formRef = useRef();

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qw43pch', 'template_7dzfa4c', formRef.current, 'xPMPQPzivNE4gngbY'
        ).then(
            (result) => {
                console.log(result.text);
                toast('Message sent successfully!');
                e.target.reset();
            },
            (error) => {
                console.error("Error sending email:", error);
                toast('Failed to send message. Please try again.');
            }
        );
        
    };

    return (
        <div className="py-10 px-4">
            <div className="max-w-5xl mx-auto bg-gray-100 px-16 py-10 shadow-md">
                <form ref={formRef} onSubmit={sendEmail}>
                    {/* Name and Email Fields */}
                    <div className="flex gap-4 mb-6">
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                className="w-full px-4 py-2 border rounded-sm"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                className="w-full px-4 py-2 border rounded-sm"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone Number Field */}
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="user_phone"
                            className="w-full px-4 py-2 border rounded-sm"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="user_message"
                            rows="8"
                            className="w-full px-4 py-2 border rounded-sm"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {/* Recaptcha */}
                    <div className="mb-6 md:flex items-center gap-4">
                        <ReCAPTCHA
                            sitekey="6LfYqrcqAAAAAN3pMOOwZlR8tZxBla20_uoUO76j" // Replace with your reCAPTCHA site key
                            onChange={handleRecaptchaChange}
                        />
                    </div>

                    {/* Send Message Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="flex cursor-pointer items-center justify-center px-6 py-3 bg-yellow-700 text-white rounded-sm hover:bg-yellow-500 transition duration-300"
                            disabled={!recaptchaValue}
                        >
                            <FaPaperPlane className="mr-2" /> Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
