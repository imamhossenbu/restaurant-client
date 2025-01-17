import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import errorImg from "../assets/404.gif";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                {/* 404 Illustration */}
                <div className="relative">
                    <img
                        src={errorImg}
                        alt="404 Error"
                        className="mx-auto w-96 h-80"
                    />
                </div>

                {/* Back to Home Button */}
                <Link
                    to="/"
                    className="mt-8 inline-flex items-center px-4 py-2 text-white bg-yellow-600 rounded hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300"
                >
                    <FaHome className="mr-2" /> Back To Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
