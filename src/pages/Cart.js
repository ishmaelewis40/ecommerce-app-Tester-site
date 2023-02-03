import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watch from '../app/images/watch.jpg';
import { AiFillDelete } from 'react-icons/ai';
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return <>
  <Meta title={"Cart"}/>
    <BreadCrumb title="Cart" />
    <Container class1="cart-wrapper home-wrapper py-5">
      
        <div className="row">
          <div className="col-12">
            <div className=" cart-header py-3 d-flex justify-content-between align-content-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className=" cart-data py-3 mb-2 d-flex justify-content-between align-content-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">

                  <img src={watch}  className="img-fluid " alt="product image"></img>
                </div>
                <div className="  justify-content-between w-75">
                  <h5 className="title">this is dummy</h5>
                  <p className="color text-dark">Colour : </p><br></br>
                  <p className="size text-dark">Size:</p>
                </div>

              </div>
              <div className="cart-col-2">
                <h5 className="price mt-5">£159.99</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-10">
                <div>
                  <input 
                  className="form-control" 
                  type="number" 
                  name="" 
                  min={1}
                  max={20}
                  id="" />
                </div>
                <div>
                <AiFillDelete className="text-danger"/>
                </div>
              </div>
              <div className="cart-col-4">
              <h5 className="price mt-5">£159.99</h5>
              </div>
            </div>
            <div className=" cart col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">

              <Link to="/product" className="button">Continue to shopping</Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: £1000</h4>
                <p className="text-dark"> Taxes and Shipping will be calculated at checkout</p>
                

                <Link to="/checkout" className="button mt-3">Checkout</Link>
                
              </div>
              </div>
            </div>
      
          </div>
        </div>
        
    </Container>
  </>
}

export default Cart;