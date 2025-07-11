import React from 'react';
import { useState } from 'react';
import { ShoppingCart, Heart, Menu, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShortsPage= () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const products = [
    { id: 1, name: "Sports short 1", price: "99.99/-", image: "\short2.jpg" },
    { id: 2, name: "Sports short 2", price: "199.99/-", image: "\short1.0.jpg" },
    { id: 3, name: "Sports short 3", price: "149.99/-", image: "\short3.jpg" },
    { id: 4, name: "Sports short 4", price: "179.99/-", image: "\short4.jpg" },
    { id: 5, name: "Sports short 5", price: "129.99/-", image: "\short5.jpg" },
    { id: 7, name: "Sports short 6", price: "159.99/-", image: "\short6.jpg" },
    { id: 8, name: "Sports short 7", price: "159.99/-", image: "\short7.avif" },
    { id: 9, name: "Sports short 8", price: "159.99/-", image: "\short8.jpg" },
    { id: 10, name: "Sports short 9", price: "159.99/-", image: "short9.jpg" },
    { id: 11, name: "Sports short 10", price: "259.99/-", image: "\short10.avif" },
    { id: 12, name: "Sports short 11", price: "259.99/-", image: "\short11.jpg" },
    { id: 13, name: "Sports short 12", price: "259.99/-", image: "\short12.jpg" },
    { id: 14, name: "Sports short 13", price: "259.99/-", image: "\short13.avif" },
    { id: 15, name: "Sports short 14", price: "259.99/-", image: "\short14.avif" },
    { id: 16, name: "Sports short 15", price: "259.99/-", image: "\short15.jpg" },
    { id: 17, name: "Sports short 16", price: "259.99/-", image: "\short16.jpg" },
    { id: 18, name: "Sports short 17", price: "259.99/-", image: "\short17.jpg" },
    { id: 18, name: "Sports short 17", price: "259.99/-", image: "\short18.jpg" },
    { id: 18, name: "Sports short 17", price: "259.99/-", image: "\short19.jpg" },
    { id: 18, name: "Sports short 17", price: "259.99/-", image: "\short20.jpg" },

  ];

  const addToCart = (productId) => {
    // Get current cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
      existingProduct.quantity += 1;
      alert('Product quantity updated in cart!');
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
      alert('Product added to cart successfully!');
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToWishlist = (productId) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const product = products.find(p => p.id === productId);
    
    if (wishlist.some(item => item.id === productId)) {
      alert('This product is already in your wishlist!');
      return;
    }
    
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert('Product added to wishlist successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-800">
              <Home className="h-6 w-6 text-orange-500" />
              <span className="font-bold text-lg uppercase">ProPulse</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-semibold hover:text-orange-500">HOME</Link>
              <Link to="/products" className="font-semibold hover:text-orange-500">PRODUCTS</Link>
              <Link to="/wishlist" className="font-semibold hover:text-orange-500">WISHLIST</Link>
              <Link to="/cart" className="font-semibold hover:text-orange-500">CART</Link>
              <Link to="/order" className="font-semibold hover:text-orange-500">ORDERS</Link>
            </div>
            
            <Link to="/login" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
              Log In
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Premium Shorts</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-gray-800 mb-4">{product.price}</p>
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-green-500 transition-colors duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={() => addToWishlist(product.id)}
                    className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShortsPage;
