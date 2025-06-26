// src/components/UserNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white bg-opacity-90 backdrop-blur-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">CozyHaven</div>

      {/* Nav Links */}
      <div className="flex space-x-6 text-sm font-medium text-gray-700">
        <Link to="/" className="hover:text-indigo-600 transition duration-150">
          Home
        </Link>
        <Link to="/users" className="hover:text-indigo-600 transition duration-150">
          Users
        </Link>
        <Link to="/reviews" className="hover:text-indigo-600 transition duration-150">
          My Reviews
        </Link>
        <Link to="/contact" className="hover:text-indigo-600 transition duration-150">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default UserNavbar;
