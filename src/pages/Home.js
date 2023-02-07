import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import mainbanner from "../app/images/main-banner.jpg";
import mainbanner1 from "../app/images/main-banner-1.jpg";
import cat from "../app/images/catbanner-01.jpg"
import cat1 from "../app/images/catbanner-02.jpg"
import cat3 from "../app/images/catbanner-03.jpg"
import cat4 from "../app/images/catbanner-04.jpg"
import Container from '../components/Container';
import { services } from '../utils/Data';
import ProductCard2 from '../components/ProductCard2';
const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5"> 
    <div className="row">
          <div className="col-6">
            <div className="main-banner  position-relative p-3">
              <img src={mainbanner1} className="img-fluid rounded-3" alt="main banner"/>
              <div className="main-banner-content position-absolute">
                <h4>Supercharged For Pros</h4>
                <h5>iphone 13 Pro</h5>
                <p>From £999 or £41.36/mon.</p><br></br>
                <Link to= "product/:id" className="button">Buy Now</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ">
            <div className="small-banner  position-relative ">
              <img src={cat} className="img-fluid rounded-3" alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>Latest Specs</h4>
                <h5>iphone 13 Pro</h5>
                <p>From £999 <br/>or £41.36/mon.</p><br/>
                
              </div>
            </div>
            <div className="small-banner  position-relative ">
              <img src={cat1} className="img-fluid rounded-3" alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>New Arrivals</h4>
                <h5> Apple Watch Pro+</h5>
                <p>From £239 <br/>or £15.36/mon.</p><br/>
                
              </div>
            </div>
            <div className="small-banner  position-relative ">
              <img src={cat4} className="img-fluid rounded-3" alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>New Arrivals</h4>
                <h5>Headphones</h5>
                <p>From £239 <br/>or £15.36/mon.</p><br/>
                
              </div>
            </div>
            <div className="small-banner  position-relative ">
              <img src={cat3} className="img-fluid rounded-3" alt="main banner"/>
              <div className="small-banner-content position-absolute">
                <h4>New Arrivals</h4>
                <h5>Buy Ipad Pro+</h5>
                <p>From £239 <br/>or £15.36/mon.</p><br/>
                
              </div>
            </div>
            </div>
          </div>
        </div>
        </Container>
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {
                services?.map((i, j) => {
                  return(
                    <div className=" d-flex align-items-center gap-10" key={j}>
              <img src={i.image} alt="Services" />
              <div>
              <h6>{i.title}</h6>
                <p className="mb-0">{ i.tagline}</p>
                </div>
              </div>
                  )

                })
              }
              

            </div>
          </div>
        </div>
      

    
    </Container>
    <Container class1="home-wrapper-2 py-5">
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between  flex-wrap align-items-center">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="" />
              </div>
                <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Tv's</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Tv's</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="" />
                </div>

            </div>
          </div>
        </div>
      </div>

    </section>

    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
    
          <div className="row">



      <div className="col-12">
        
            <h3 className="section-heading">Featured Collection</h3>
        </div>
          
         <ProductCard />
         <ProductCard2 />
         <ProductCard />
         <ProductCard />
        
          </div>
  
    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
    
        <div className="row">
        <div className="col-md-6">
        <div className="pray">
          <h1>Famously new</h1>
         <img src='/images/apple.jpg' alt=""/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="panel text-left">
          <h5>big screen</h5>
          <h1>Apple Smart Watch 7 series</h1>
          <p>From £267.99 or £18.82/mo. for 24mo.*</p>

          <p>Series 7 is the most durable Apple Watch ever built, with an even more crack-resistant front crystal. 
            The largest, most advanced Always-On Retina display yet makes everything you do with your Apple Watch Series 7 bigger and better. Stay centred.
             Move ahead. Taking a moment throughout the day to pause and breathe can reduce stress. The Apple Watch Series 7 delivers powerful health features on your wrist.
             </p>
             <Link to= "product/:id" className=" buy button ">Buy Now</Link>
        
          
        </div>
      </div>
        </div>
   
    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
        <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        
        </div>
        <div className="row ">
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
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
         <ProductCard />
         <ProductCard />
         <ProductCard />

        </div>
      
    </Container>
    <Container class1="marque-wrapper home-wrapper py-5">
        <div className="row">
          <div className="marquee-inner-wrapper card-wrapper ">
            <Marquee className="d-flex">
              <div className="mx-4 w-25">
                <img src="images/brand-01.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
              <img src="images/brand-02.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
              <img src="images/brand-03.png" alt="brand" />
              </div>
              <div className="mx-4 w-25" >
              <img src="images/brand-04.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
              <img src="images/brand-05.png" alt="brand" />
              </div>
              <div className="mx-4 w-25" >
              <img src="images/brand-06.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
              <img src="images/brand-07.png" alt="brand" />
              </div>
 
           </Marquee>
          </div>
        </div>
      
    </Container>
   
    <Container class1="blog-wrapper py-5 home-wrapper-2">
      
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
         
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
    </Container>
    </>
  )
};

export default Home;