import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import {TbGitCompare} from 'react-icons/tb'
import { AiFillHeart } from 'react-icons/ai';
import Container from '../components/Container';

const SingleProduct = () => {
    const props = {
        width: 600,
        height: 600, 
        zoomWidth: 600,  
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};
    const[orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };
  return <>
   <BreadCrumb title="Single Names" />
  <Meta title={"Single Names"}/>
  <Container class1=" main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-6">
                <div className="main-product-image">
                    <div>
                        <ReactImageZoom {...props} />
                    </div>
                </div>
                <div className="other-product-images d-flex flex-wrap gap-15">
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"  className="img-fluid" alt="watch" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"  className="img-fluid"alt="watch" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className="img-fluid"alt="watch" /></div>
                    <div><img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"  className="img-fluid"alt="watch" /></div>
                </div>
            </div>
            <div className="col-6">
                <div className="main-product-details">
                    <div className="border-bottom py-3">

                    <h3 className="title">Kids Headphones Bulk 10 Pack Multi Colored For Students
                    </h3>
                    </div>
                    <div className="border-bottom py-3">
                        <p className="price">£99.99</p>
                        <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          isHalf="true"
                          a11y="true"
                          activeColor="#ffd700"
                          />
                          <p className="mb-0 "> (2 reviews) </p>
                        </div>
                        <a href="#review ">Write a Review</a>
                    </div>
                    <div className="border-bottom py-3">
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Type : <p className="product-data">Havels</p></h3>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Brand : <p className="product-data">Havels</p></h3>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Categories : <p className="product-data">
                            Watch  </p></h3>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                            <h3 className="product-heading">Tags : <p className="product-data">Watch</p></h3>
                        </div>
                        <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                            <h3 className="product-heading">Availability : <p className="product-data">InStock</p></h3>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                            <h3 className="product-heading">Size : </h3>
                            <div className="d-flex flex-wrap gap-10">
                                <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                            </div>
                        </div>
                        <div className="d-flex gap-10 flex-row mt-2 mb-3">
                            <h3 className="product-heading">color :</h3>
                              <Color/>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                            
                            <div className="cart buttons d-flex align-items-center gap-15 ">
                            <h3 className="product-heading">Quantity :</h3>
                            
                                <input 
                                type="number" 
                                name="" 
                                className="form-control"
                                style={{"width":"70px","height":"30px"}}  
                                min={0}
                                max={20}
                                id="" />
                            <button className="button border-0 ms-4">Add to Cart</button>
                              <Link to="/sign-up"  className="button signup">Buy it Now</Link>
                            </div>
                            
                           
                              
                        </div>
                        <div className="d-flex align-items-center gap-15">
                            <div>
                                <a href="/compare-product"> < TbGitCompare  className="fs-5 me-2"/> Add to Compare</a>
                            </div>
                            <div>
                                <a href="/wishlist"> < AiFillHeart   className="fs-5 me-2"/> Add to Wishlist</a>
                            </div>
                        </div>
                        <div className="d-flex gap-10 flex-column mt-4 mb-3">
                            <h3 className="product-heading">Size : </h3>
                            <div className="d-flex flex-wrap gap-10 mb-4 ">
                                <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                            </div>
                        </div>
                        <div className="d-flex gap-10 flex-column my-3">
                            <h3 className="product-heading">Shipping & Returns : </h3><p className="product-data">
                               Free shipping and returns available on all orders! we aim to ship within < b>5-10 business days!</b></p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-3">
                            <h3 className="product-heading"> Product Link: </h3>
                            <a href="javascript:void(0);" onClick={() => {copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg");
                            }}
                            />
                               Copy Product Link
                              
                    </div>

                </div>
            </div>
        </div>
    </div>
  </Container>
  <Container class1="main-product-wrapper py-5 home-wrapper-2">
   
        <div className="row">
            <div className="col-12">
                <div className="bg-white text-dark p-3">
                <h4>Description</h4>
                <p>
                    lorem ipsum Donec egestas, quam nec rhoncus luctus, urna nibh fermentum nulla, et commodo dolor leo quis elit.
                     Suspendisse tempus, elit et interdum consectetur,
                </p>
            </div>
            </div>
        </div>
    
  </Container>
  <Container class1="reviews-wrapper py-5 home-wrapper-2">
    
        <div className="row">
            <div className="col-12">
                <div className="review-inner-wrapper py-5">

                <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                        <h4 className="mb-2">Customer reviews</h4>
                        <div className="d-flex align-items-center gap-10">

                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          isHalf="true"
                          a11y="true"
                          activeColor="#ffd700"
                          />
                          <p className="mb-0 "> Based on 2 reviews</p>
                          </div>
                    </div>
                    {orderedProduct&& (
                        
                        <div>
                        <a  className=" text-dark text-decoration-underline" href=''>Write a review</a>
                    </div>
                        )}
                </div>
                <div id="review" className="review-form py-4">
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <p>Name</p>
                    <input type="text" className="form-control" placeholder="Enter your Name" />
                  </div>
                  <div>
                    <p>Email</p>
                    <input type="email" className="form-control" placeholder="Lois.Jane@example.com"/>
                  </div>
                  <div>
                    <p>Rating</p>
                  <ReactStars
                          count={5}
                          size={24}
                          value={0}
                          edit={true}
                          isHalf="true"
                          a11y="true"
                          activeColor="#ffd700"
                          />
                  </div>
                  <div>
                  <p >Review Title</p>
                    <input type="text" className="form-control" placeholder="Give your review a title"/>
                  </div>
                  <div >
                    <p >Body of review (1500)</p>
                    <textarea  className="w-100 form-control" rows="4" cols="30" placeholder=" Write your comments here"></textarea>
                  </div>
                  <div>

                  <div className="d-flex justify-content-end ">
                    <button className="button border-0">Submit Review</button>
                  </div>
                  </div>
                </form>
                <div className="review-head mt-3 d-flex justify-content-between align-items-end">
             

                </div>
                <div>
                <h4 className="mb-2 mt-4"> Reviews</h4>
                        <div className="d-flex align-items-center gap-10">
                </div>
                </div>
                <div className=" customer-reviews d-flex mt-2  flex-column gap-10">
                <ReactStars
                          count={5}
                          size={24}
                          value={4.5}
                          edit={false}
                          isHalf="true"
                          a11y="true"
                          activeColor="#ffd700"
                          />
                <h6>Very Good</h6>
                <p>"Far better than I had expected, and it came quicker than i anticipated too".</p>
                <p> submitted by <b>Jstar5</b> on <b>1/02/2023</b></p> 
                </div>
                <div className=" customer-reviews d-flex mt-2  flex-column gap-10">
                <ReactStars
                          count={5}
                          size={24}
                          value={4.5}
                          edit={false}
                          isHalf="true"
                          a11y="true"
                          activeColor="#ffd700"
                          />
                <h6> Good</h6>
                <p>"Good product although it doesnt have the best battery life".</p>
                <p> submitted by <b>PreciousP</b> on <b>28/01/2023</b></p> 
                </div>
                
             </div>
            </div>
        </div>
        </div>
    
  </Container>
  <Container class1="popular-wrapper py-5 home-wrapper-2">
     
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
        <ProductCard />
        
        </div>
      
    </Container>

  
  </>
}
export default SingleProduct;