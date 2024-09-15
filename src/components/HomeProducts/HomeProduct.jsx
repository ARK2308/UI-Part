import React from 'react';
import './Homeproduct.scss';

const HomeProduct = () => {
  return (
    <>
         <section id="sellers">
                <div class="seller containers">
                    <h2>Products</h2>
                    <div class="best-seller">
                                        <div className="best-p1">

                                            <img src='https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/d/b/c/8-mrj2099-8-aadi-white-original-imagmkfyfyfn9kc8.jpeg?q=70' alt="img" />
                                            <div className="best-p1-txt">
                                            <div className="name-of-p">
                                                    <p>element.productname</p>
                                                </div>
                                                <div className="rating">
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bx-star"></i>
                                                    <i className="bx bx-star"></i>
                                                </div>
                                                <div className="price">
                                                ₹ element.price
                                                    {/* <div className="colors">
                                                        <i className="bx bxs-circle red"></i>
                                                        <i className="bx bxs-circle blue"></i>
                                                        <i className="bx bxs-circle white"></i>
                                                    </div> */}
                                                </div>
                                                <div className="buy-now">
                                                    <button><a href="#">Buy Now</a></button>
                                                </div>
                                            </div>
                                        </div>

                    </div>
                </div>
                <div class="seller containers">
                    <h2>New Arrivals</h2>
                    <div class="best-seller">
                                        <div className="best-p1">
                                            <img src='' alt="img" />
                                            <div className="best-p1-txt">
                                                <div className="name-of-p">
                                                    <p>element.productname</p>
                                                </div>
                                                <div className="rating">
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                </div>
                                                <div className="price">
                                                ₹ element.price
                                                    {/* <div className="colors">
                                                        <i className="bx bxs-circle blank"></i>
                                                        <i className="bx bxs-circle blue"></i>
                                                        <i className="bx bxs-circle brown"></i>
                                                    </div> */}
                                                </div>
                                                <div className="buy-now">
                                                    <button><a href="#">Buy Now</a></button>
                                                </div>
                                            </div>
                                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default HomeProduct