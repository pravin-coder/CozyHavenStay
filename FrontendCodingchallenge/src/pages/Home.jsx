import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const goToUsersPage = () => {
    navigate("/users");
  };

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 shadow bg-white w-full">
        <nav className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Logo"
              className="h-8"
            />
            <span className="text-2xl font-semibold">Cozy Haven Stay</span>
          </div>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="/login" className="hover:text-blue-600">Sign In</a></li>
            <li><a href="/register" className="hover:text-blue-600">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-24 px-8 text-center bg-gradient-to-br from-indigo-100 via-white to-blue-100 w-full"
      >
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Discover Your Next Stay With <br /> Cozy Haven
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Book premium rooms, plan vacations, and experience comfort like never before.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/register"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition"
          >
            Get started - Sign Up
          </a>
          <button
            onClick={goToUsersPage}
            className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-gray-700 transition"
          >
            View Users
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-screen py-20 px-8 bg-white-100 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Cozy Haven Stay is your ideal platform for finding and booking hotels across cities.
          Whether you're planning a weekend getaway or a business trip, we make your stay cozy, easy,
          and enjoyable.
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="w-screen py-20 px-8 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Got questions or suggestions? We'd love to hear from you! Reach out to us anytime.
        </p>
        <a
          href="mailto:support@cozyhaven.com"
          className="text-blue-600 underline text-lg"
        >
          support@cozyhaven.com
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2025 Cozy Haven Stay. All rights reserved.</p>
      </footer>
    </div>
  );
}
