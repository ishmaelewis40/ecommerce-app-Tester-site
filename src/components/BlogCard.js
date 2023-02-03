import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard =() => {
  return (
    <>
    
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg"  className="img-fluid w-100" alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">Sun,22 Jan</p>
                <h5 className="title">
                        A beautiful Sunday renaissance
                </h5>
                <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus tristique orci sem, sed scelerisque lorem molestie ut.
                 In tristique arcu lorem, quis sagittis arcu feugiat non.
                  Proin ac erat mattis, rhoncus risus et, elementum sapien. 
                  
                  
                </p>
                <Link to="/blog:id" className= "button">Read More</Link>
            </div>
        </div>
    
    </>
  )
}

export default BlogCard