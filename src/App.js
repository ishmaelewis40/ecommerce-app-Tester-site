import React from 'react';
import './App.css';
import {  BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blogs from './pages/Blogs';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsOfService from './pages/TermsOfService';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout';
function App() {
  return (
    <>
    <Router>
    <Routes> 
      <Route path="/" element= {<Layout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="store" element={<OurStore />}/>
        <Route path="/product/:id" element={<SingleProduct />}/>
        <Route path="blogs" element={<Blogs />}/>
        <Route path="/blog:id" element={<SingleBlog />}/>
        <Route path="compare-product" element={<CompareProduct />}/>
        <Route path="wishlist" element={<Wishlist />}/>
        <Route path="login" element={<Login />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="checkout" element={<Checkout />}/>
        <Route path="forgot-password" element={<Forgotpassword />}/>
        <Route path="sign-up" element={<Signup />}/>
        <Route path="reset-password" element={<Resetpassword />}/>
        <Route path="privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="refund-policy" element={<RefundPolicy />}/>
        <Route path="shipping-policy" element={<ShippingPolicy />}/>
        <Route path="terms-and-conditions" element={<TermsOfService />}/>

      </Route>
      </Routes > {/*routes*/}
      </Router>
    </>
  );
}

export default App;
