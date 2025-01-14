import React, { useEffect, useRef, useState } from "react";
import logInBg from "../../assets/others/authentication.png";
import logInImg from "../../assets/others/authentication1.png";
import {
    loadCaptchaEnginge,
    validateCaptcha,
    LoadCanvasTemplate,
} from "react-simple-captcha";

// Import React Icons
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const captchaRef = useRef();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    // Handle CAPTCHA validation
    const handleCaptchaValidation = () => {
        const enteredCaptcha = captchaRef.current.value;
        if (validateCaptcha(enteredCaptcha)) {
            setIsCaptchaValid(true); // Enable the login button
        } else {
            setIsCaptchaValid(false); // Disable the login button
        }
    };

    useEffect(() => {
        loadCaptchaEnginge(6); // Load the CAPTCHA when the component mounts
    }, []);

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center py-10 px-4 sm:px-8"
            style={{
                backgroundImage: `url('${logInBg}')`,
            }}
        >
            <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-2xl rounded-lg max-w-5xl w-full overflow-hidden">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2 bg-cover bg-center p-4">
                    <img
                        src={logInImg}
                        alt="Login Illustration"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Right Form Section */}
                <div className="w-full md:w-1/2 p-6 sm:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                        Sign In
                    </h2>
                    <form onSubmit={handleLogIn}>
                        {/* Email Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Recaptcha */}
                        <div className="mb-4">
                            <label
                                htmlFor="recaptcha"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Recaptcha
                            </label>
                            <div>
                                <LoadCanvasTemplate />
                            </div>
                            <input
                                type="text"
                                id="recaptcha"
                                ref={captchaRef}
                                placeholder="Type recaptcha here"
                                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            />
                        </div>
                        <div className="flex justify-center mb-4">
                            <button
                                type="button"
                                onClick={handleCaptchaValidation}
                                className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-green-300 transition duration-300`}
                            >
                                Validate Captcha
                            </button>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ${isCaptchaValid ? "" : "opacity-50 cursor-not-allowed"
                                }`}
                            disabled={!isCaptchaValid} // Disable if CAPTCHA is invalid
                        >
                            Sign In
                        </button>
                    </form>

                    {/* New Account Link */}
                    <p className="text-center text-gray-600 mt-4">
                        New here?{" "}
                        <a
                            href="/signup"
                            className="text-blue-500 hover:text-blue-700 font-semibold"
                        >
                            Create a New Account
                        </a>
                    </p>

                    {/* Social Logins */}
                    <div className="mt-6">
                        <p className="text-center text-gray-600 mb-4">Or Sign in with</p>
                        <div className="flex justify-center space-x-4">
                            {/* Facebook */}
                            <button
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
                            >
                                <FaFacebook className="text-lg" />
                            </button>
                            {/* Google */}
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                            >
                                <FaGoogle className="text-lg" />
                            </button>
                            {/* Twitter */}
                            <button
                                type="button"
                                className="bg-blue-400 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300"
                            >
                                <FaTwitter className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
