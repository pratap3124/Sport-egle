import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateSize = (productId, newSize) => {
    const updatedCart = cart.map(item => 
      item.id === productId ? { ...item, size: newSize } : item
    );
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product removed from cart!');
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      return sum + (price * item.quantity);
    }, 0);
  };

  const checkout = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-800">
              <span className="font-bold text-lg uppercase">Eagle Sports</span>
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
  
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {cart.length === 0 ? (
          <div className="text-center bg-white rounded-lg shadow-sm p-20">
            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
            <p className="mt-2 text-sm text-gray-500">Add some products to your cart!</p>
            <Link
              to="/products"
              className="mt-6 inline-block px-6 py-3 bg-orange-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm p-20 mb-4 flex items-center gap-5"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                    
                    {/* Size Selection Dropdown */}
                    <div className="mt-2">
                      <label htmlFor={`size-${item.id}`} className="block text-sm font-medium text-gray-700">
                        Size
                      </label>
                      <select
                        id={`size-${item.id}`}
                        value={item.size || ''}
                        onChange={(e) => updateSize(item.id, e.target.value)}
                        className="mt-1 block w-15 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                      >
                        <option value="">Select Size</option>
                        
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-12">
                <h3 className="text-lg font-medium">Order Summary</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal ({cart.length} items)
                    </span>
                    <span className="font-medium">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-medium">{calculateTotal().toFixed(2)}/-</span>
                  </div>
                </div>
              
                <Link
  to="/order"
  onClick={checkout}
  className="mt-6 w-full bg-orange-500 hover:bg-green-600 text-white py-3 px-4 rounded-md font-medium transition-colors text-center inline-block"
>
  Proceed to Checkout
</Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CartPage;