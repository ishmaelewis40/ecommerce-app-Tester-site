import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import prodcompare from "../app/images/prodcompare.svg";
import wish from "../app/images/wish.svg";
import Wishlist from  "../app/images/wishlist.svg";
import watch from "../app/images/watch.jpg";
import watch2 from "../app/images/watch-1.png"
import watch3 from "../app/images/watch-03.png"
import addcart from "../app/images/add-cart.svg"
import view from "../app/images/view.svg"

const ProductCard2 = (props) => {
    const { grid } = props;
    let location = useLocation();
    
  return (
  <>
   <div 
    className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}> {/*changes the colum width based on the grid number */}
       

        <div  className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><img src={wish} alt="wishlist" /></Link>
            </div>
            <div className="product-image">
                <img src={watch2} className="img-fluid"   alt="product images" />
                <img src={watch3} className="img-fluid " alt="product images" />
                </div>
            <div className="product-details">
                <Link to="/product/:id">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                    Kids headphones bulk 10 pack multi colored for students
                </h5>
                </Link>
                <ReactStars
                 count={5}
                 size={24}
                 value={4}
                 edit={false}
                 isHalf="true"
                 a11y="true"
                 activeColor="#ffd700"
                 />
                 <p className="price">£100.00</p>
                <p className= {`description ${grid=== 12 ? "d-block" : "d-none"}`}>varius enim auctor lorem ullamcorper blandit a vel velit.
                 In convallis finibus vulputate. 
                 Sed pellentesque eu tellus ut finibus.
                </p>
                
                
            </div>
            <div className="action-bar position-absolute">
                <div className=" d-flex flex-column gap-15">
                    <Link >
                        <img src={prodcompare} alt="addcart" /> 
                        </Link>
                        <Link >
                        <img src={view} alt="addcart" /> 
                        </Link>
                        <Link >
                        <img src={addcart} alt="addcart" /> 
                        </Link>
                       
                </div>
            </div>
        </div>
                 
        </div>
  </>
  )
}

export default ProductCard2