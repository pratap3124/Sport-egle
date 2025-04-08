import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-semibold">
      {/* Header */}
      <header className="w-full bg-white fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between px-8 py-5 max-w-[1068px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center text-gray-700 font-bold text-lg">
            <Home className="w-6 h-6 text-[#fc641e] mr-2" />
            EAGLE SPORTS
          </Link>

          {/* Menu Icon */}
          <input 
            type="checkbox" 
            id="menu" 
            className="hidden"
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <label 
            htmlFor="menu" 
            className="hidden cursor-pointer md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-16 6h16"
              />
            </svg>
          </label> 
           <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-semibold text-gray-800 hover:text-orange-500">HOME</Link>
            <Link to="/products" className="font-semibold text-gray-800 hover:text-orange-500">PRODUCTS</Link>
            <Link to="/wishlist" className="font-semibold text-gray-800 hover:text-orange-500">WISHLIST</Link>
            <Link to="/cart" className="font-semibold text-gray-800 hover:text-orange-500">CART</Link>
          </nav>
          {/* Login Button */}
          <Link to="/login" className="px-6 py-2 bg-[#fc641e] text-white rounded-full hover:bg-green-600">
            Log In
          </Link>
        </div>
      </header>

      {/* Sign Up Section */}
      <div className="grid grid-cols-1 md:grid-cols-[0.4fr_1fr] items-center min-h-screen mt-8 max-w-[1068px] mx-auto px-4">
        {/* Login Container */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[1.4rem] font-semibold">Welcome, Let's get started</h2>
          <p className="text-[0.9rem] font -semibold">
            Already have account <Link to="login.html" className="text-[#fc641e]">Log In</Link>
          </p>

          {/* Login Form */}
          <form className="flex flex-col">
            <span className="text-[0.9rem] text-[#8a8a8a] mb-1">Full Name</span>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-[#8a8a8a] p-2.5 mb-4 bg-white outline-none"
            />

            <span className="text-[0.9rem] text-[#8a8a8a] mb-1">Enter your email address</span>
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              required
              className="border border-[#8a8a8a] p-2.5 mb-4 bg-white outline-none"
            />

            <span className="text-[0.9rem] text-[#8a8a8a] mb-1">Phone</span>
            <input
              type="tel"
              placeholder="Enter your number"
              required
              className="border border-[#8a8a8a] p-2.5 mb-4 bg-white outline-none"
            />

            <span className="text-[0.9rem] text-[#8a8a8a] mb-1">Enter your password</span>
            <input
              type="password"
              placeholder="At least 8"
              required
              className="border border-[#8a8a8a] p-2.5 mb-4 bg-white outline-none"
            />

            <button
              type="submit"
              className="border-none bg-[#fc641e] text-white text-[0.85rem] font-medium p-2.5 mb-4 hover:bg-green-600"
            >
              Sign Up
            </button>

            <Link to="login.html" className="text-[0.9rem] text-right">
              Already have account
            </Link>
          </form>

          <Link to="login.html" className="bg-[#fc641e] text-white text-center py-2 px-6 hover:bg-green-600">
            Log In
          </Link>
        </div>

        {/* Login Image */}
        <div className="hidden md:flex justify-end">
          <img
            src="\login3.avif"
            alt="Login"
            className="h-[500px] w-[700px] rounded-[15px] object-cover"
          />
        </div>
        </div>
      </div>
  );
};

export default SignUpPage