
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import ProductsPage from './components/ProductsPage';
import SignUpPage from './components/SignupPage';
import WishlistPage from './components/WishlistPage';
import ShortsPage from './components/ShortsPage';
import OrderPage from './components/OrderPage';

function App() {
  return (
    <Router>
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/order" element={<OrderPage />} />

          


        </Routes>
    </Router>
  );
}

export default App;
