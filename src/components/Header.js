import React from "react";
import {NavLink, Link}  from "react-router-dom";
import {BsSearch} from "react-icons/bs";
const Header = () => {

  return (
    <>
      <header className="header-top-strip ру-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className=" text-white mb-0">Come and see the Latest Deals</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">Free delivery with the discount code"FREE2023"</p>
            </div>

          </div>
        </div>
      </header>
      <header className= "header-upper ру-3">
        <div className="container-xxl">
           <div className="row align-items-center">
             <div className="col-2">
               <h2>
                <Link to="/" ClassName="text-white">Dev HQ</Link>
                </h2>
              </div>
             <div className= "col-5">
              <div className="input-group mb-3 ">
                 <input
                 type="text"
                 className="form-control ру-2"
                 placeholder= "Search Product Here..."
                 aria-label="Search Product Here..."
                 aria-describedby= "basic-addon2"
                 />
                 <span className="input-group-text p-3" id="basic-addon2">
                   <BsSearch className="fs-6" />
                </span>
                 </div>
                   </div>
             <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to="/compare-product"className="d-flex align-items-center gap-10 text-white">
                  <img src="/images/compare.svg" alt="Compare" />
                  <p className ="mb-0">Compare <br/> Products</p>
                  </Link>

                </div>
                <div>
                <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                <img src="/images/wishlist.svg" alt="Wishlist" />
                  <p className ="mb-0">Wishlist</p>
                  </Link>

                </div>
                <div>
                <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                <img src="/images/user.svg" alt="Login" />
                <p className ="mb-0">Account <br /> Log In </p>
                  </Link>

                </div>
                <div>
                <Link to="/cart"   className="d-flex align-items-center gap-10 text-white">
                <img src="images/cart.svg" alt="Cart" />
                <div className="d-flex flex-column gap-10">
                  <span className="badge bg-white text-dark">0</span>
                  <p className ="mb-0">£ 500</p>

                </div>
                  </Link>

                </div>
              </div>
               </div>

             </div>
          </div>
        </header>
        <header className="header-bottom py-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-30">
                
                  <div className="dropdown">
                    <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="images/menu.svg" alt="" />
                       <span className="me-5 d-inline-block">Product Categories</span>
                     </button>
                      <ul className="dropdown-menu">
                         <li><a className="dropdown-item text-white" href="/">Action</a></li>
                         <li><a className="dropdown-item text-white" href="/">Another action</a></li>
                         <li><a className="dropdown-item text-white" href="/">Something else here</a></li>
                       </ul>
                  </div>
                  <div className="menu-links">
                    <div className="d-flex align-items-center gap-30">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/store">Our Store</NavLink>
                      <NavLink to="/blogs">Blogs</NavLink>
                      <NavLink to="/contact">Contact</NavLink>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </header>
          </>
          );
        }
          
export default Header;