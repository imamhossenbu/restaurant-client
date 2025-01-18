import React from "react";
import { FaHome, FaUtensils, FaList, FaCalendarCheck, FaUsers, FaStore, FaEnvelope, FaShoppingCart, FaCalendar, FaUtensilSpoon, FaBars } from "react-icons/fa";
import { FaBookBookmark, FaMoneyBill1 } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    // Define the active class variable
    const activeClass = 'text-white font-bold hover:text-gray-300';
    const [isAdmin] = useAdmin();
    console.log(isAdmin);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-black">
            {/* Sidebar */}
            <div className="w-full text-center md:text-left md:w-64 bg-[#d1a054] text-black p-4">
                <div className="py-6">
                    <h1 className="font-bold text-2xl uppercase">Bistro Boss</h1>
                    <h3 className="text-md font-semibold uppercase">Restaurant</h3>
                </div>
                {/* Admin Section */}
                <ul className="space-y-2 uppercase">
                    {isAdmin ? (
                        <>
                            {/* Admin-specific links go here */}
                            <li className="flex items-center gap-2">
                                <FaHome />
                                <NavLink
                                    to="/dashboard/admin-home"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaUtensilSpoon />
                                <NavLink
                                    to="/dashboard/add-items"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    Add Items 
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaBars />
                                <NavLink
                                    to="/dashboard/manage-items"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    Manage All Items 
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaBookBookmark />
                                <NavLink
                                    to="/dashboard/manage-bookings"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    Manage Bookings  
                                </NavLink>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaUsers />
                                <NavLink
                                    to="/dashboard/all-users"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                   All Users   
                                </NavLink>
                            </li>
                            {/* Add more admin-specific items as needed */}
                        </>
                    ) : (
                        <>
                            <li className="flex items-center gap-2">
                                <FaHome />
                                <NavLink
                                    to="/dashboard/userHome"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    User Home
                                </NavLink>
                            </li>

                            <li className="flex items-center gap-2">
                                <FaCalendar />
                                <NavLink
                                    to="/dashboard/reservation"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    Reservation
                                </NavLink>
                            </li>

                            <li className="flex items-center gap-2">
                                <FaMoneyBill1 />
                                <NavLink
                                    to="/dashboard/payment-history"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    Payment History
                                </NavLink>
                            </li>

                            <li className="flex items-center gap-2">
                                <FaShoppingCart />
                                <NavLink
                                    to="/dashboard/my-cart"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    My Cart
                                </NavLink>
                            </li>

                            <li className="flex items-center gap-2">
                                <FaList />
                                <NavLink
                                    to="/dashboard/add-review"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    Add Review
                                </NavLink>
                            </li>

                            <li className="flex items-center gap-2">
                                <FaCalendarCheck />
                                <NavLink
                                    to="/dashboard/my-booking"
                                    className={({ isActive }) => (isActive ? activeClass : '')}>
                                    My Booking
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>


                <hr className="my-4 border-gray-600" />

                {/* General Section */}
                <ul className="space-y-2 uppercase">
                    <li className="flex items-center gap-2">
                        <FaHome />
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? activeClass : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaList />
                        <NavLink
                            to="/menu"
                            className={({ isActive }) => isActive ? activeClass : ''}>
                            Menu
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaStore />
                        <NavLink
                            to="/order/salad"
                            className={({ isActive }) => isActive ? activeClass : ''}>
                            Shop
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaEnvelope />
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? activeClass : ''}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-4 md:px-8 py-4 text-black">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
