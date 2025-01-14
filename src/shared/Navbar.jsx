import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold px-4 py-2"
              : "text-white px-4 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold px-4 py-2"
              : "text-white px-4 py-2"
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold px-4 py-2"
              : "text-white px-4 py-2"
          }
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold px-4 py-2"
              : "text-white px-4 py-2"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-black bg-opacity-60 fixed w-full z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div>
          <h1 className="text-xl font-bold text-white">BISTRO BOSS</h1>
          <p className="text-sm font-light text-gray-400">RESTAURANT</p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex">
          <ul className="flex items-center space-x-6">{navOptions}</ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-gray-900 text-white transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start px-6 py-4 space-y-2">
          {navOptions}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
