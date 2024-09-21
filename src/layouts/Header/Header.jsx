import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Button from 'react-bootstrap/Button';
import Offcanvas from "react-bootstrap/Offcanvas";

import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { uselogoutfun, usercart, userVerify } from "../../redux/slice/userAuthSlice/userAuthSlice";
import { NavLink, useNavigate } from "react-router-dom";

const userImg =
  "https://res.cloudinary.com/abdul5000/image/upload/v1698586142/qlbeoms6wevghueo0bfp.jpg";

const Header = () => {
  const [show, setShow] = useState(false);

  const { UserLoggedIn } = useSelector((state) => state.User);
  const { loginuser } = useSelector((state) => state.User);
  const { AddCart } = useSelector((state) => state.User);
  const { userCartData } = useSelector((state) => state.User);
  console.log("userCartData" ,userCartData)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoggedIn = () => {
    dispatch(userVerify());
  };

  
  const handleCartsDetails = ()=>{
    dispatch(usercart());
}


  const userlogouthandle = ()=>{
    dispatch(uselogoutfun()).then((res)=>{
        handleClose()
        navigate("/")
    }).catch((error)=>{
        handleClose()

        navigate("/")
    })
}

  useEffect(() => {
    userLoggedIn();
  }, []);


  useEffect(()=>{
    handleCartsDetails();
},[AddCart ,loginuser])
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="left">
              <div className="navlogo">
                <NavLink to="/" className="text-dark text-decoration-none">
                  <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="" />
                </NavLink>
              </div>
            </div>

            <div className="rigth d-flex justify-content-center align-items-center">
              <div className="hamburgur" onClick={handleShow}>
                <i class="fa-solid fa-bars"></i>
              </div>
              <div className="nav_btn">
                <a href="/products" style={{ color: "black" }}>
                  Product
                </a>
                {/* <a href="/login">Sign in</a> */}
              </div>
              <div id="ex4" className="cartsicon">
              <NavLink to="/carts" className='text-dark'>
                                    <span className='p1 fa-stack fa-2x has-badge' data-count={UserLoggedIn?.length > 0 ? userCartData?.length:"0"}>
                                        <i class="p1 fa-solid fa-cart-shopping"></i>
                                    </span>
                                </NavLink>
              </div>

              <div className="profile">
                <Dropdown className="text-center">
                  <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                    <img
                      src={
                        UserLoggedIn?.length > 0
                          ? UserLoggedIn[0]?.userprofile
                          : "/logo192.png"
                      }
                      alt="userImg"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {UserLoggedIn?.length > 0 ? (
                      <>
                        <Dropdown.Item>
                          <NavLink
                            to="/userprofile"
                            className="text-dark text-decoration-none"
                          >
                            <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
                            Profile
                          </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item  onClick={userlogouthandle}>
                          <i class="fa-solid fa-right-from-bracket"></i>
                          &nbsp;&nbsp;&nbsp; Logout
                        </Dropdown.Item>
                      </>
                    ) : (
                      <>
                        <Dropdown.Item>
                          <NavLink
                            to="/login"
                            className="text-dark text-decoration-none"
                          >
                            <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
                            Login
                          </NavLink>
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </nav>
        </div>

        {/* sidebar for responsive */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={userImg} alt="userImg" className="profile_img" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body style={{ background: "black" }}>
                        <NavLink to="/products" className='text-light text-decoration-none'>
                            <i class="fa-solid fa-shop"></i>&nbsp;&nbsp;
                            Products</NavLink> <br />
                        {
                            UserLoggedIn?.length > 0 ? (
                                <>
                                    <NavLink to="/userprofile"   className='text-light text-decoration-none'>
                                        <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;
                                        Profile
                                    </NavLink>
                                    <div className='text-light'   onClick={userlogouthandle}  style={{cursor:"pointer"}}>
                                        <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;
                                        Logout
                                    </div>

                                </>
                            ) : (
                                <>
                                    <NavLink to="/login"  className='text-light text-decoration-none'>
                                        <i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;
                                        Login</NavLink>
                                </>
                            )
                        }

                        <div id='ex4' className="cartsicon">
                            <a href="" className='text-light' onClick={handleClose}>
                                <span className='p1 fa-stack fa-2x has-badge' data-count={0}>
                                    <i class="p1 fa-solid fa-cart-shopping"></i>
                                </span>
                            </a>
                        </div>
                    </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
};

export default Header;
