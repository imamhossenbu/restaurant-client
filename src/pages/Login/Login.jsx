import React, { useContext, useEffect, useState } from "react";
import logInBg from "../../assets/others/authentication.png";
import logInImg from "../../assets/others/authentication1.png";
import {
    loadCaptchaEnginge,
    validateCaptcha,
    LoadCanvasTemplate,
} from "react-simple-captcha";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
    const axiosSecurePublic = useAxiosPublic();
    const { signInUser, googleLogIn, githubLogIn, loginWithFacebook } = useContext(AuthContext);
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        console.log({
            email,
            password,
        });

        signInUser(email, password)
            .then((result) => {
                toast.success("Log In Successful", {
                    position: "bottom-right",
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error?.message, error);
                toast.error(getErrorMessage(error.code), {
                    position: "bottom-right",
                });
            });
    };

    const handleFacebookLogIn = () => {
        loginWithFacebook()
            .then((res) => {
                const result = res.user;
                console.log(result);
                const userInfo = {
                    name: result?.displayName,
                    email: result?.email,
                }
                axiosSecurePublic.post('/users', userInfo)
                    .then(() => {
                        toast.success("Log In Successful", {
                            position: "bottom-right",
                        });
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((res) => {
                const result = res.user;
                console.log(result);
                const userInfo = {
                    name: result.displayName,
                    email: result.email,
                }
                axiosSecurePublic.post('/users', userInfo)
                    .then(() => {
                        toast.success("Log In Successful", {
                            position: "bottom-right",
                        });
                        navigate(from, { replace: true });
                    })
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "bottom-right",
                });
            });
    };

    const handleGithubLogin = () => {
        githubLogIn()
            .then((res) => {
                const result = res.user;
                console.log(result);
                const userInfo = {
                    name: result?.displayName,
                    email: result?.email,
                }
                axiosSecurePublic.post('/users', userInfo)
                    .then(() => {
                        toast.success("Log In Successful", {
                            position: "bottom-right",
                        });
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleCaptchaValidation = (e) => {
        const enteredCaptcha = e.target.value.trim();
        if (validateCaptcha(enteredCaptcha)) {
            setIsCaptchaValid(true);
            toast.success("CAPTCHA is correct!", { position: "bottom-right" });
        } else {
            setIsCaptchaValid(false);
            toast.error("CAPTCHA is incorrect. Try again.", {
                position: "bottom-right",
            });
        }
    };

    const getErrorMessage = (errorCode) => {
        if (errorCode === "auth/wrong-password") {
            return "Incorrect password.";
        }
        if (errorCode === "auth/user-not-found") {
            return "User not found.";
        }
        if (errorCode === "auth/invalid-email") {
            return "Invalid email format.";
        }
        return "Login failed. Try again.";
    };

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

                        {/* CAPTCHA */}
                        <div className="mb-4">
                            <label
                                htmlFor="recaptcha"
                                className="block text-gray-700 text-sm font-semibold mb-2"
                            >
                                CAPTCHA
                            </label>
                            <LoadCanvasTemplate />
                            <input
                                type="text"
                                id="recaptcha"
                                name="captcha"
                                onBlur={handleCaptchaValidation}
                                placeholder="Type CAPTCHA here"
                                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ${isCaptchaValid ? "hover:scale-95" : "opacity-50 cursor-not-allowed"
                                }`}
                            disabled={!isCaptchaValid}
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
                            <button onClick={handleFacebookLogIn}
                                type="button"
                                className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
                            >
                                <FaFacebook className="text-lg" />
                            </button>
                            {/* Google */}
                            <button
                                onClick={handleGoogleLogIn}
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                            >
                                <FaGoogle className="text-lg" />
                            </button>
                            {/* Twitter */}
                            <button onClick={handleGithubLogin}
                                type="button"
                                className="bg-blue-400 text-white px-4 py-2 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300"
                            >
                                <FaGithub className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
