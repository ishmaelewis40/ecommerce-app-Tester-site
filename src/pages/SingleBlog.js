import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import blog from "../app/images/blog-1.jpg";
import Container from '../components/Container';

const SingleBlog = () => {
  return <>
  <Meta title={"Dynamic Blog Name"}/>
    <BreadCrumb title="Single-Blog" />
    <Container class1="blog-wrapper home-wrapper-2 py-5">
        
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card ">
                        <Link to="/blogs" className="d-flex align-items-center gap-10"> 
                        <HiOutlineArrowLeft className="fs-4"/>Go back to Blogs</Link>
                        <h3 className="title">
                            A Beautiful Sunday Morning renaissance
                        </h3>
                        <img src={blog}  className="img-fluid w-100 my-4" alt="" />
                        <p>You're only as good as your last collection,
                             which is an enormous pressure. I think there is something about luxury, Its not something that people need,
                             but its what they want.It really tugs the heart strings. I have a brilliant relationship with money.
                             Nunc interdum sed turpis ut porttitor. Suspendisse iaculis condimentum ullamcorper. 
                             Morbi ut diam nec magna iaculis pulvinar.</p>
                    </div>
                
            </div>
        </div>
    
    </Container>


  </>
}

export default SingleBlog;