import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { getAlluser } from '../../redux/slice/userAuthSlice/userAuthSlice';
import "./admin.css";
import AdminUserTable from "./AdminUserTable";
import { getAllProducts } from "../../redux/slice/product/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAlluser } from "../../redux/slice/userAuthSlice/userAuthSlice";
import { Ordersforadmin } from "../../redux/slice/adminAuthSlice/AdminSlice";
// import { Ordersforadmin } from '../../redux/slice/adminAuthSlice/AdminSlice';
// import { getAllHomeProducts, } from '../../redux/slice/productSlice/ProductSlice';
// import AdminuserTable from "./AdminuserTable"

const AdminDashboard = () => {
  const { ProductsData } = useSelector((state) => state.Product);
  const { getAlluserData } = useSelector((state) => state.User);
  const {DeleteUser} = useSelector((state)=>state.User);
  const { OrdersData } = useSelector((state) => state.Admin);
 

  const dispatch = useDispatch();
  const [allusercount,setAllusercount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageCount,setPageCount] = useState(0);

  const productApi = () => {
    const data = {
      selectedcategory: "all",
      page,
    };

    dispatch(getAllProducts(data))
      .then((res) => {
        // console.log("res",res)
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const getAlluserfunction = ()=>{
    const data = {
        page
    }

    dispatch(getAlluser(data)).then((res)=>{
        if(res?.payload){
            console.log("first",res)
            setPageCount(res.payload.Pagination.pageCount)
            setAllusercount(res.payload.Pagination.count)
        }
    }).catch((error)=>{
        console.log("error",error)
    })
}

const getOrdersAdmin = () => {
  dispatch(Ordersforadmin())
}

    // pagination
    // handle next btn
    const handleNext = () => {
      setPage(() => {
          if (page === pageCount) return page;
          return page + 1;
      })
  }

  // handle prev btn
  const handlePrevios = () => {
      setPage(() => {
          if (page === 1) return page;
          return page - 1;
      })
  }



  useEffect(() => {
    productApi();
    getAlluserfunction()
  }, [page ,DeleteUser]);

  return (
    <>
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
          <div className="box-topic">Total Order</div>
          <div className="number">{OrdersData?.length}</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt"></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bx-cart-alt cart"></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Products</div>
            <div className="number">
              {ProductsData?.Pagination?.totalProducts}
            </div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt"></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bxs-cart-add cart two"></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Users</div>
            <div className="number">{allusercount}</div>
            <div className="indicator">
              <i className="bx bx-up-arrow-alt"></i>
              <span className="text">Up from yesterday</span>
            </div>
          </div>
          <i className="bx bx-cart cart three"></i>
        </div>
        <div className="box">
          <div className="right-side">
            <div className="box-topic">Total Return</div>
            <div className="number">11,086</div>
            <div className="indicator">
              <i className="bx bx-down-arrow-alt down"></i>
              <span className="text">Down From Today</span>
            </div>
          </div>
          <i className="bx bxs-cart-download cart four"></i>
        </div>
      </div>

      <div className="sales-boxes">
        <div className="recent-sales box">
          <div className="title">Recent Sales</div>
          <div className="sales-details">
          <AdminUserTable
                        getAlluserData={getAlluserData}
                        page={page}
                        pageCount={pageCount}
                        setPage={setPage}
                        handleNext={handleNext}
                        handlePrevios={handlePrevios}
                         />
          </div>
        </div>
        <div className="top-sales box">
          <div className="title">Top Selling Product</div>
          <ul className="top-sales-details">
            {/* {
              productsHome?.map((element, inde) => {
                return (
                  <> */}
            <li>
              <a href="#">
                <img src="element.productimage" alt="" />
                <span className="product">element.productname</span>
              </a>
              <span className="price">₹element.price</span>
            </li>
            {/* </>
                )
              })
            } */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
