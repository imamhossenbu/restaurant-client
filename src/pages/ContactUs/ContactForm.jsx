import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    return (
        <div className="py-10 px-4">
            <div className="max-w-5xl  mx-auto bg-gray-100 px-16 py-10  shadow-md">
                <form>
                    {/* Name and Email Fields */}
                    <div className="flex gap-4 mb-6">
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border  rounded-sm"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border  rounded-sm"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone Number Field */}
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-2 border  rounded-sm"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="8"
                            className="w-full px-4 py-2 border  rounded-sm"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {/* Recaptcha */}
                    <div className="mb-6 md:flex items-center gap-4">
                        {/* Checkbox and Text */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="not-a-robot"
                                className="mr-2"
                                required
                            />
                            <label htmlFor="not-a-robot" className="text-sm font-medium">
                                I am not a robot
                            </label>
                        </div>

                        {/* reCAPTCHA */}
                        <ReCAPTCHA
                            sitekey="YOUR_RECAPTCHA_SITE_KEY" // Add your reCAPTCHA site key here
                            onChange={handleRecaptchaChange}
                        />
                    </div>


                    {/* Send Message Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="flex cursor-pointer items-center justify-center px-6 py-3 bg-yellow-700 text-white rounded-sm hover:bg-yellow-500 transition duration-300"
                            disabled={!recaptchaValue} // Disable button if reCAPTCHA is not completed
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
