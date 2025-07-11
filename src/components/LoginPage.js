import React from 'react';
import { Home, Menu, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 border-b-2 ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
            <Home className="w-6 h-6 text-orange-500 mr-2" />
            ProPulse
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-semibold text-gray-800 hover:text-orange-500">HOME</Link>
            <Link to="/products" className="font-semibold text-gray-800 hover:text-orange-500">PRODUCTS</Link>
            <Link to="/wishlist" className="font-semibold text-gray-800 hover:text-orange-500">WISHLIST</Link>
            <Link to="/cart" className="font-semibold text-gray-800 hover:text-orange-500">CART</Link>
            
          </nav>

          <div className="flex items-center space-x-4">
            <Menu className="md:hidden w-6 h-6 cursor-pointer" />
            <Link to="/signup" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Login Section */}
      <div className="container mx-auto px-4 pt-20 pb-5">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-lg border border-orange-500 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Login To Continue</h2>
            <p className="text-gray-600 mb-6">
              Log in with your data that you entered during your registration
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1">Enter your email address</label>
                <input
                  type="email"
                  placeholder="yourmail@gmail.com"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-1">Enter your password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-green-600"
              >
                Log In
              </button>

              <Link to="#" className="block text-orange-500 text-center">
                Forget Password?
              </Link>
            </form>

            <Link
              to="/signup"
              className="block mt-6 bg-orange-500 text-white py-2 text-center rounded hover:bg-green-600"
            >
              Sign up now
            </Link>
          </div>

          <div className="hidden md:block">
            <img
              src="\login2.avif"
              alt="Login"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-orange-500 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-medium mb-4">EAGLE SPORTS</h2>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="#" className="block text-sm hover:text-gray-200">Agency</Link>
                <Link to="#" className="block text-sm hover:text-gray-200">Address</Link>
                <Link to="#" className="block text-sm hover:text-gray-200">Organisation</Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Locations</h3>
              <div className="space-y-2">
                <Link to="#" className="block text-sm hover:text-gray-200">Delhi</Link>
                <Link to="#" className="block text-sm hover:text-gray-200">Hyderabad</Link>
                <Link to="#" className="block text-sm hover:text-gray-200">Mumbai</Link>
                <Link to="#" className="block text-sm hover:text-gray-200">Goa</Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <div className="space-y-2">
                <Link to="#" className="block text-sm hover:text-gray-200">+91 8977895788</Link>
                <Link to="#" className="block text-sm hover:text-gray-200">+91 8977895119</Link>
                <Link to="#" className="block text-sm hover:text-gray-200">balajibandaru41@gmail.com</Link>
                <div className="flex space-x-4 mt-4">
                  <Link to="#" className="hover:text-gray-200">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link to="#" className="hover:text-gray-200">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link to="https://www.instagram.com/Propulse.sports_wear/?hl=en" className="hover:text-gray-200">
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
