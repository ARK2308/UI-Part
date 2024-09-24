import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
// import { hamburgurcontext } from '../../../context/ContextProvider';
// import { useDispatch, useSelector } from 'react-redux';
// import { AdminLoggedIn, adminLogout } from '../../../redux/slice/adminAuthSlice/AdminSlice';
import "../../../pages/Admin/admin.css";
import { AdminLoggedIn, AdminLogout } from "../../../redux/slice/adminAuthSlice/AdminSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminSidebar = ({ children }) => {
  const { adminLoggedINData } = useSelector((state) => state.Admin);
  

  const [isSidebarActive, setSidebarActive] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  // admin verify
  const AdminVerify = () => {
    dispatch(AdminLoggedIn());
  };


  useEffect(() => {
    AdminVerify();
  }, []);


  // logoutfunction
  const handleLogout = () => {
    dispatch(AdminLogout())
      .then((res) => {
        navigate("/adminlogin");
      })
      .catch((error) => {
        navigate("/adminlogin");
      });
  };

  return (
    <>
      {/* {
                location.pathname.split("/")[1] !== "admin" ? "" :
                    ( */}
      {/* <>  */}
      <div className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <div className="logo-details">
        <NavLink to="/" className="text-decoration-none">
                        <i className='fa-solid fa-user'></i>
                        <span className='logo_name'>{adminLoggedINData[0]?.name} Admin</span>
                    </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/admin/dashboard" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/addproducts">
              <i class="fa-solid fa-truck-fast"></i>
              <span className="links_name">Add Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/addcategory">
              <i class="fa-solid fa-certificate"></i>
              <span className="links_name">Add category</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/products">
              <i class="fa-solid fa-certificate"></i>
              <span className="links_name">Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">
              <i class="fa-solid fa-bag-shopping"></i>
              <span className="links_name">Orders</span>
            </NavLink>
          </li>
          <li>
            <a href="#">
              <i class="fa-solid fa-gear"></i>
              <span className="links_name">settings</span>
            </a>
          </li>
        </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i class="fa-solid fa-bars" onClick={toggleSidebar}></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search"></i>
          </div>
          <div className="profile-details">
            <span className="admin_name">{adminLoggedINData[0]?.name}</span>
            <Dropdown className="text-center">
              <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                <img src={adminLoggedINData[0]?.profile} alt="" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLogout()}>
                  <i class="fa-solid fa-right-from-bracket"></i>
                  &nbsp;&nbsp;&nbsp;Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
        <div className="home-content">{children}</div>
      </section>

      {/* </>
                    )



            } */}
    </>
  );
};

export default AdminSidebar;
