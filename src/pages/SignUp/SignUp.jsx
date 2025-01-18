import React, { useContext, useRef, useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import logInBg from "../../assets/others/authentication.png";
import logInImg from "../../assets/others/authentication1.png";

const SignUp = () => {
    const axiosSecurePublic = useAxiosPublic();
    const { createUser, googleLogIn, updateUserProfile, loginWithFacebook, githubLogIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError("Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.");
            return;
        }

        createUser(email, password)
            .then(() => {
                // Update the user's profile
                updateUserProfile(name, photo)
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                        };
                        // Save user info in the database
                        axiosSecurePublic.post('/users', userInfo)
                            .then(() => {
                                toast.success("Sign Up Successful! User added to the database.", {
                                    position: "bottom-right",
                                });
                                navigate(from, { replace: true });
                            })
                            .catch((dbError) => {
                                toast.error(`Database error: ${dbError.message}`, {
                                    position: "bottom-right",
                                });
                            });
                    })
                    .catch((updateError) => {
                        toast.error(`Profile update error: ${updateError.message}`, {
                            position: "bottom-right",
                        });
                    });
            })
            .catch((authError) => {
                toast.error(`Sign-up error: ${authError.message}`, {
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




    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center py-10 px-4 sm:px-8"
            style={{ backgroundImage: `url('${logInBg}')` }}
        >
            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg max-w-5xl w-full overflow-hidden">
                <div className="w-full md:w-1/2 p-6 sm:p-10">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        {/* Input Fields */}
                        {/* Reuse input component if needed */}
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Name</label>
                            <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Photo URL</label>
                            <input type="url" name="photo" placeholder="Enter your photo URL" className="w-full px-4 py-2 border rounded-lg" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email Address</label>
                            <input type="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-lg" required />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 mb-2">Password</label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="w-full px-4 py-2 border rounded-lg" required />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">Sign Up</button>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-blue-500 hover:text-blue-700 font-semibold"
                        >
                           Go to Log in 
                        </a>
                    </p>

                    {/* Social Login */}
                    <div className="mt-6 text-center">
                        <p>Or Sign Up with</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <button onClick={handleFacebookLogIn} className="bg-blue-600 text-white p-2 rounded-full"><FaFacebook /></button>
                            <button onClick={handleGoogleLogIn} className="bg-red-500 text-white p-2 rounded-full"><FaGoogle /></button>
                            <button onClick={handleGithubLogin} className="bg-gray-800 text-white p-2 rounded-full"><FaGithub /></button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                    <img src={logInImg} alt="Sign Up Illustration" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
