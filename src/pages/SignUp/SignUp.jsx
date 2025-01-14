import React, { useRef, useState } from "react";
import logInBg from "../../assets/others/authentication.png";
import logInImg from "../../assets/others/authentication1.png";

// Import React Icons
import { FaFacebook, FaGoogle, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const passwordRef = useRef();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // Regex for password validation: At least 8 characters, one uppercase, one number, and one special character
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character."
            );
            return;
        }

        console.log("Form submitted with:", { name, email, password });
        setPasswordError(""); // Clear error after successful validation
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center py-10 px-4 sm:px-8"
            style={{
                backgroundImage: `url('${logInBg}')`,
            }}
        >
            <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-2xl rounded-lg max-w-5xl w-full overflow-hidden">
                <div className="w-full md:w-1/2 p-6 sm:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
                        Sign Up
                    </h2>
                    <form onSubmit={handleSignUp}>
                        {/* Name Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

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
                        <div className="mb-4 relative">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                ref={passwordRef}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                            )}
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Already Registered */}
                    <p className="text-center text-gray-600 mt-4">
                        Already registered?{" "}
                        <a
                            href="/login"
                            className="text-blue-500 hover:text-blue-700 font-semibold"
                        >
                            Go to Log in
                        </a>
                    </p>

                    {/* Social Logins */}
                    <div className="mt-6">
                        <p className="text-center text-gray-600 mb-4">Or Sign up with</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
                            >
                                <FaFacebook className="text-lg" />
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                            >
                                <FaGoogle className="text-lg" />
                            </button>
                            <button
                                type="button"
                                className="bg-blue-400 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300"
                            >
                                <FaTwitter className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Illustration */}
                <div className="w-full md:w-1/2 bg-cover bg-center p-4">
                    <img
                        src={logInImg}
                        alt="Login Illustration"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
