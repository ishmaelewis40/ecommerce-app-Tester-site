import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs';
import newsletter from "../app/images/newsletter.png";




const Footer = () => {
  return (
    <>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30">
              <img src={newsletter} alt="newsletter" />
              <h2 className="mb-0 text-white">Sign up For newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group mb-3 ">
                 <input
                 type="text"
                 className="form-control ру-1"
                 placeholder= "Your Email Address..."
                 aria-label="Your Email Address..."
                 aria-describedby= "basic-addon2"
                 />
                 <span className="input-group-text p-3" id="basic-addon2">
                   Subscribe
                </span>
          </div>
        </div>
      </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row ">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div className="footer-links d-flex flex-column">
              <p>Demo Store</p>
              <p>No.742 Bishop Drive,London</p>
              <p>United Kingdom</p>
              <a href="tel:+44 796123092" className="mt-4 d-block mb-2 text-white">
                +44 796123092</a>
              <a href="mailto:" className="mt-4 d-block mb-2 text-white">
                ishmaelewis40@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-15">
                <a href="www.linkedin.com/in/ishmael-john-lewis-72b289216" className="text-white">
                  <BsLinkedin  className="text-white fs-5"/>
                </a>
                <a href="https://github.com/ishmaelewis40" className="text-white">
               <BsGithub className="text-white fs-5" />
                </a>
                <a href="text-white">
                <BsYoutube className="text-white fs-5"/>
                </a>
                <a href="text-white">
                <BsInstagram className="text-white fs-5"/>
               </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to="/refund-policy"className="text-white py-2 mb-1">Refund Policy</Link>
              <Link to="/shipping-policy"className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link to="/terms-and-conditions"className="text-white py-2 mb-1">Terms Of Service</Link>
              <Link to="/blogs"className="text-white py-2 mb-1">Blogs</Link>
              
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="/" className="text-white py-2 mb-1">Search</Link>
              <Link to="/About"  className="text-white py-2 mb-1">About Us</Link>
              <Link to="/"  className="text-white py-2 mb-1">FAQ</Link>
              <Link to="/contact"  className="text-white py-2 mb-1">Contact</Link>
              <Link to="/"  className="text-white py-2 mb-1">Size Chart</Link>
              
            </div>
            
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link to ="/" className="text-white py-2 mb-1">Laptops</Link>
              <Link  to ="/" className="text-white py-2 mb-1">Headphones</Link>
              <Link  to ="/" className="text-white py-2 mb-1">Tablets</Link>
              <Link  to ="/" className="text-white py-2 mb-1">Watches</Link>
              
            </div>
          </div>
        </div>
      </div>

    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}; Powered by Dev HQ</p>

          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;