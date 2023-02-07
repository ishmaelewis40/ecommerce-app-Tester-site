import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const SpecialProducts = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">
              Huawei mate 20 pro
            </h6>
            <ReactStars
                 count={5}
                 size={24}
                 value={4}
                 edit={false}
                 isHalf="true"
                 a11y="true"
                 activeColor="#ffd700"
                 />
                 <p className="price">
                  <span className="red-p ">£900</span> &nbsp; <strike>£1000</strike>
                 </p>
                 <div className="discount-till d-flex align-items-center gap-10">
                  <p className="mb-0">
                    <b>5</b>days
                  </p>
                  <div className="d-flex gap-10 align-items-center">
                    <span className= "badge rounded-circle p-2 bg-warning" >1</span>:
                    <span className= "badge rounded-circle p-2 bg-warning" >1</span>:
                    <span className= "badge rounded-circle p-2 bg-warning" >1</span>
                  </div>
                      <div className="progress-bar" 
                      role="progressbar" 
                      style={{"width":"25%"}}
                      aria-valuenow="25" 
                      aria-valuemin="0" a
                      ria-valuemax="100">

                      </div>
                  </div>
                  <div className="prod-count my-3">
                    <p>Products: 5</p>
                    <div className="progress">
                      <div className="progress-bar" 
                      role="progressbar" 
                      style={{"width":"25%"}}
                      aria-valuenow="25" 
                      aria-valuemin="0" a
                      ria-valuemax="100">

                      </div>
                  </div>
                  </div>
                  <Link to="/cart" className="button">Add to Cart</Link>
                 </div>
                 
          </div>
        </div>
      </div>
    
    
  )
}

export default SpecialProducts;