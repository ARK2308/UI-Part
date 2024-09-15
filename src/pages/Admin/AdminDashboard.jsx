import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAlluser } from '../../redux/slice/userAuthSlice/userAuthSlice';
import "./admin.css"
import AdminUserTable from './AdminUserTable'
// import { Ordersforadmin } from '../../redux/slice/adminAuthSlice/AdminSlice';
// import { getAllHomeProducts, } from '../../redux/slice/productSlice/ProductSlice';
// import AdminuserTable from "./AdminuserTable"

const AdminDashboard = () => {
  return (
    <>
      <div className="overview-boxes">
        <div className="box">
          <div className="right-side">
            <div className="box-topic">50</div>
            <div className="number">12</div>
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
            <div className="number">7</div>
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
            <div className="number">alluserCount</div>
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
            {/* <AdminuserTable getAlluserdata={getAlluserdata}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              page={page}
              setPage={setPage}
              pageCount={pageCount}
            /> */}
            <AdminUserTable />

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
                        <img src='element.productimage' alt="" />
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
  )
}

export default AdminDashboard