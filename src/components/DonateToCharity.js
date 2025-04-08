import React from 'react';
import { useState } from 'react';
import { ShoppingCart, Heart, Menu, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');

  const products = [
  { id: 1, name: "Sports Jersey 1", price: "99.99", image: "\jersey13.jpg" },
  { id: 2, name: "Sports Jersey 2", price: "199.99", image: "\jersey2.webp" },
  { id: 3, name: "Sports Jersey 3", price: "149.99", image: "\jersey22.jpg" },
  { id: 4, name: "Sports Jersey 4", price: "179.99", image: "\jersey4.jpg" },
  { id: 5, name: "Sports Jersey 5", price: "129.99", image: "\jersey5.jpg" },
  { id: 7, name: "Sports Jersey 6", price: "159.99", image: "\jersey8.jpg" },
  { id: 8, name: "Sports Jersey 7", price: "159.99", image: "\jersey26.jpeg" },
  { id: 9, name: "Sports Jersey 8", price: "159.99", image: "\jersey10.jpg" },
  { id: 10, name: "Sports Jersey 9", price: "159.99/-", image: "jersey11.jpg" },
  { id: 11, name: "Sports Jersey 10", price: "259.99/-", image: "\jersey12.jpg" },
  { id: 12, name: "Sports Jersey 11", price: "259.99/-", image: "\jersey13.jpg" },
  { id: 13, name: "Sports Jersey 12", price: "259.99/-", image: "\jersey14.jpg" },
  { id: 14, name: "Sports Jersey 13", price: "259.99/-", image: "\jersey15.jpg" },
  { id: 15, name: "Sports Jersey 14", price: "259.99/-", image: "\jersey16.webp" },
  { id: 16, name: "Sports Jersey 15", price: "259.99/-", image: "\jersey17.webp" },
  { id: 17, name: "Sports Jersey 16", price: "259.99/-", image: "\jersey18.webp" },
  { id: 18, name: "Sports Jersey 17", price: "259.99/-", image: "\jersey19.webp" },
  { id: 19, name: "Sports Jersey 18", price: "259.99/-", image: "\jersey20.jpg" },
  { id: 20, name: "Sports Jersey 19", price: "259.99/-", image: "\jersey21.jpg" },
  { id: 20, name: "Sports Jersey 20", price: "259.99/-", image: "\jersey22.jpg" },
  { id: 20, name: "Sports Jersey 21", price: "259.99/-", image: "\jersey23.png" },
  { id: 20, name: "Sports Jersey 22", price: "259.99/-", image: "\jersey19.webp" },
  { id: 20, name: "Sports Jersey 23", price: "259.99/-", image: "\jersey25.jpg" },
  { id: 20, name: "Sports Jersey 24", price: "259.99/-", image: "\jersey0.jpg" },
  ];

  const addToCart = (productId) => {
    // ... existing addToCart function remains the same
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
    // ... existing addToWishlist function remains the same
    
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

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    // Redirect based on selected category
    switch(category) {
      case 'jerseys':
        navigate('/products/jerseys');
        break;
      case 'shorts':
        navigate('/products/shorts');
        break;
      default:
        navigate('/products');
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header remains the same */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Our Products</h2>
        <select 
          className="w-full p-2 border rounded-md text-sm mb-6"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select a Product Category</option>
          <option value="jerseys">Jerseys</option>
          <option value="shorts">Shorts</option>
        </select>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            // ... existing product rendering remains the same
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

export default ProductsPage;