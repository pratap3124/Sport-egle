import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Home, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Load wishlist from localStorage on component mount
    const loadWishlist = () => {
      const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlistItems(savedWishlist);
    };
    
    loadWishlist();
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  const addToCart = (productId) => {
    const product = wishlistItems.find(item => item.id === productId);
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Remove from wishlist after adding to cart
    removeFromWishlist(productId);
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
        <h2 className="text-2xl font-bold mb-8">My Wishlist</h2>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-6">Add some products to your wishlist!</p>
            <Link to="/products" className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {wishlistItems.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow">
                <img 
                  src={item.image || "/api/placeholder/200/200"} 
                  alt={item.name}
                  className="w-48 h-48 object-cover rounded-lg"
                />
                
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-orange-500 font-semibold mb-4">${item.price}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                    
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
                    >
                      <Package className="w-5 h-5" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default WishlistPage;
