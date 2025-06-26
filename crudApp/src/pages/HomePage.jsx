// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const goToUsersPage = () => {
    navigate("/users");
  };
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column bg-white">
      {/* Header / Navbar */}
      <header className="fixed-top bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Logo"
                height="32"
                className="me-2"
              />
              <span className="navbar-brand h1 mb-0 text-primary fw-bold">
                Cozy Haven Stay
              </span>
            </div>
            <button
              onClick={goToUsersPage}
              className="btn btn-primary"
            >
              View Users
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center bg-light pt-5 mt-5"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="display-4 fw-bold mb-3">
          Discover Your Next Stay With <br /> Cozy Haven
        </h1>
        <p className="lead text-muted mb-4 px-3">
          Book premium rooms, plan vacations, and experience comfort like never before.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <a href="/register" className="btn btn-primary px-4">
            Get started - Sign Up
          </a>
          <button
            onClick={goToUsersPage}
            className="btn btn-outline-secondary px-4"
          >
            View Users
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="h1 mb-4">About Us</h2>
          <p className="text-muted fs-5">
            Cozy Haven Stay is your ideal platform for finding and booking hotels
            across cities. Whether you're planning a weekend getaway or a
            business trip, we make your stay cozy, easy, and enjoyable.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="h1 mb-4">Contact Us</h2>
          <p className="text-muted fs-5 mb-3">
            Got questions or suggestions? We'd love to hear from you! Reach out to
            us anytime.
          </p>
          <a
            href="mailto:support@cozyhaven.com"
            className="text-primary fs-5 text-decoration-underline"
          >
            support@cozyhaven.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} Cozy Haven Stay. All rights reserved.</p>
      </footer>
    </div>
  );
}
