import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { getAllProducts } from '../../redux/slice/productSlice/ProductSlice';
// import Paginations from '../../component/Pagination/Paginations';
import { Button } from 'react-bootstrap';
// import { deleteProduct } from '../../redux/slice/adminAuthSlice/AdminSlice';

const AdminProductspage = () => {
    // const { products } = useSelector((state) => state.Products);
    // const  {deleteproductsStore} = useSelector((state) => state.Admin);
    // console.log("productsdelete",deleteproductsStore)
    

    // const dispatch = useDispatch()

    // const [page, setPage] = useState(1);
    // const [pageCount, setPageCount] = useState(0);

    // const [productDelete,setProductDelete] = useState(false);

    // const productApi = () => {

    //     const data = {
    //         selectedcategory: "all",
    //         page
    //     }

    //     dispatch(getAllProducts(data)).then((res) => {
    //         setPageCount(res.payload.Pagination.pageCount)
    //     }).catch((err) => {
    //         console.log("err", err)
    //     })
    // }

    // const handleDeleteProducts = (id) => {
    //     console.log(id)
    //     const data = {
    //         productid: id
    //     }

    //     dispatch(deleteProduct(data))
    // }


    // // pagination
    // // handle prev btn
    // const handlePrevious = () => {
    //     setPage(() => {
    //         if (page === 1) return page;
    //         return page - 1
    //     })
    // }

    // // handle next btn
    // const handleNext = () => {
    //     setPage(() => {
    //         if (page === pageCount) return page;
    //         return page + 1
    //     })
    // }

    // useEffect(() => {
    //     productApi()
    // }, [page,deleteproductsStore])

    return (
        <>
            <section id="sellers">
                <div class="seller containers">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>Products</h2>


                    </div>

                    <div class="best-seller">
                        {/* {
                            products?.getAllproducts?.map((element, index) => {
                                return (
                                    <> */}
                                        <div className="best-p1 mb-5">
                                            <img src='element.productimage' alt="img" />
                                            <div className="best-p1-txt">
                                                <div className="name-of-p">
                                                    <p>element.productname</p>
                                                </div>
                                              
                                                <div className="price">
                                                    $ element.price
                                                    <Button variant='none'> <i class="fa-solid fa-trash" style={{ color: "red" }}></i></Button>
                                                </div>
                                              
                                            </div>
                                        </div>
                                    {/* </>
                                )
                            })
                        } */}

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

export default AdminProductspage