import React from 'react';
import { Menu, Home, Facebook, Twitter, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const slides = [
    {
      image: "/offer1.0.jpg",
      title: "Summer Sale!",
      link:"/products",
      description: "50% off on all Sports Jerseys"

    },
    {
      image: "/offer2.webp",
      title: "New Arrivals",
      description: "Check out our latest collection"
    },
    {
      image: "/offer3.webp",
      title: "Bundle Deal",
      description: "Buy 2 Get 1 Free on all accessories"
    },
  ];

  // const categories = [
  //   { name: "Volleyball Jerseys", image: "/volleylogo.png" },
  //   { name: "Basketball", image: "/baslogo.jpeg" },
  //   { name: "Kabaddi", image: "/kablogo.webp" },
  //   { name: "Football", image: "/footlogo.webp" }
  // ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-gray-800 font-bold text-lg">
            <Home className="w-6 h-6 text-[#fc641e] mr-2" />
            ProPulse
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Menu className="w-6 h-6" />
          </div>
          
          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li><Link to="/" className="font-semibold hover:text-[#fc641e]">HOME</Link></li>
            <li><Link to="/products" className="font-semibold hover:text-[#fc641e]">PRODUCTS</Link></li>
            <li><Link to="/wishlist" className="font-semibold hover:text-[#fc641e]">WISHLIST</Link></li>
            <li><Link to="/cart" className="font-semibold hover:text-[#fc641e]">CART</Link></li>
            <Link to="/order" className="font-semibold hover:text-orange-500">ORDERS</Link>
            
          </ul>
          
          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/login" className="bg-[#fc641e] text-white px-6 py-2 rounded-full hover:bg-green-600">
              Log In
            </Link>
            <Link to="/signup" className="bg-[#fc641e] text-white px-6 py-2 rounded-full hover:bg-green-600">
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <div 
          className="relative h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center" 
          style={{ backgroundImage: "url('/eagle2.jpg')" }}
        >
          <div className="bg-black bg-opacity-10 w-full h-full absolute" />
          <div className="relative z-10 px-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to Eagle Sports Wear</h1>
            <p className="text-xl mb-8">Discover amazing products at great prices!</p>
            <Link to="/products" className="bg-[#ff6a00] text-white px-8 py-3 rounded-lg text-lg hover:bg-green-600 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Make Your Dream Order",
              description: "We guarantee the best quality, innovative designs created by professional & award winning Architects & Developers"
            },
            {
              title: "Start Your Membership",
              description: "Sellers with a wide variety of products are more likely to satisfy your demands. More the options, better is your decision"
            },
            {
              title: "Customer Friendly",
              description: "We choose sellers who have previously closed deals with similar requirement as you have. They'll understand your needs better"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:bg-[#fc641e] hover:text-white transition-colors">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
        
    <div className="max-w-6xl mx-auto px-4 mb-16">
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
              <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex(prev => prev === 0 ? slides.length - 1 : prev - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentIndex(prev => prev === slides.length - 1 ? 0 : prev + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          aria-label="Next slide"
        >
          →
        </button>
      </div>
    </div>
        {/* Footer */}
        <footer className="bg-[#fc641e] text-white pt-16 rounded-t-[5rem]">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
            <div>
              <h2 className="text-2xl font-medium mb-4">EAGLE SPORTS</h2>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                <Link to="#" className="hover:text-gray-200">Agency</Link>
                <Link to="#" className="hover:text-gray-200">Organisation</Link>
                <Link to="#" className="hover:text-gray-200">Rates</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Locations</h3>
              <div className="flex flex-col space-y-2">
                <Link to="#" className="hover:text-gray-200">NUZVID</Link>
                <Link to="#" className="hover:text-gray-200">HYDERABAD</Link>
                <Link to="#" className="hover:text-gray-200">ELURU</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Contact</h3>
              <div className="flex flex-col space-y-2">
                <Link to="tel:+918977895788" className="hover:text-gray-200">+91 8977895788</Link>
                <Link to="tel:+918977895119" className="hover:text-gray-200">+91 8885388953</Link>
                <Link to="mailto:balajibandaru41@gmail.com" className="hover:text-gray-200">vakasrinu3355@gmail.com</Link>
                <div className="flex space-x-4 mt-4">
                  <Link to="#" className="hover:text-gray-200"><Facebook size={20} /></Link>
                  <Link to="#" className="hover:text-gray-200"><Twitter size={20} /></Link>
                  <Link to="https://www.instagram.com/eaglesports_wear/?hl=en" className="hover:text-gray-200"><Instagram size={20} /></Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Homepage;

