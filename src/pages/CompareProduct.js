import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Container from '../components/Container';
const CompareProduct = () => {
  return <>
  <Meta title={"Compare Products"}/>
    <BreadCrumb title="Compare Products" />
    <Container class1="compare-product-wrapper py-5 home-wrapper-2">
       
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title"> Honor T1  Tablet 8.0 12GB Ram SSD 7 Inch 5G ready </h5>
                            <h6 className="price mb-3 mt-3">£499.99</h6>
                            <div>
                                <div classname=" products-details">
                                    <h5>Brand:</h5>
                                    <p  >Havels</p>
                                </div>
                                <div classname=" products-details">
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div classname=" products-details">
                                    <h5>SKU</h5>
                                    <p>Havels</p>
                                </div>
                                <div classname=" products-details">
                                    <h5>Availability:</h5>
                                    <p >In Stock</p>
                                </div>
                                <div classname=" products-details">
                                    <h5>Color:</h5>
                                  <Color />
                                </div>
                                <div classname=" products-details">
                                    <h5>Size</h5>
                                    <div className=" d-flex  gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title"> Honor T1  Tablet 8.0 12GB Ram SSD 7 Inch 5G ready </h5>
                            <h6 className="price mb-3 mt-3">£499.99</h6>
                            <div>
                                <div classname=" products-details">
                                    <h5>Brand:</h5>
                                    <p  >Havels</p>
                                </div>
                                <div classname=" products-details">
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div classname=" products-details">
                                    <h5>SKU</h5>
                                    <p>Havels</p>
                                </div>
                                <div classname=" products-details">
                                    <h5>Availability:</h5>
                                    <p >In Stock</p>
                                </div>
                                <div classname=" products-details">
                                    <h5>Color:</h5>
                                  <Color />
                                </div>
                                <div classname=" products-details">
                                    <h5>Size</h5>
                                    <div className=" d-flex  gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </Container>
  </>
}

export default CompareProduct;