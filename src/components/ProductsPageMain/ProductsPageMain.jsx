import React from 'react';
import Select from 'react-select';
import "./Productspage.scss";

const ProductsPageMain = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <>
         <section id="sellers">
                <div class="seller containers">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>Products</h2>
                        <div className='category-filter mt-5'>
                            {/* <h5>Filter By category</h5> */}
                            {/* <Select  options={categoryshow} placeholder="filter by category" onChange={(e)=>setSelectedCategory(e.value)} /> */}
                            <Select  options={options} placeholder="filter by category" />
                        </div>

                    </div>

                    <div class="best-seller">
                                        <div className="best-p1 mb-5">
                                            <img src='' alt="img" />
                                            <div className="best-p1-txt">
                                                <div className="name-of-p">
                                                    <p>element.productname</p>
                                                </div>
                                                <div className="rating">
                                                    {/* <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bxs-star"></i>
                                                    <i className="bx bx-star"></i>
                                                    <i className="bx bx-star"></i> */}
                                                </div>
                                                <div className="price">
                                                    $ element.price
                                                 
                                                </div>
                                                <div className="buy-now">
                                                    <button><a href={`/productdetails/$element._id`}>Buy Now</a></button>
                                                </div>
                                            </div>
                                        </div>
                    </div>
                    {/* <Paginations
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    page={page}
                    pageCount={pageCount}
                    setPage={setPage}
                     /> */}
                </div>
            </section>
    </>
  )
}

export default ProductsPageMain