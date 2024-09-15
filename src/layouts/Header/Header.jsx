import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './header.scss';

const userImg = 'https://res.cloudinary.com/abdul5000/image/upload/v1698586142/qlbeoms6wevghueo0bfp.jpg';

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="left">
                            <div className="navlogo">
                                <a href="/"> <img src="https://i.postimg.cc/TP6JjSTt/logo.webp" alt="logo" /> </a>
                            </div>
                        </div>

                        <div className="rigth d-flex justify-content-center align-items-center">
                            <div className='hamburgur' onClick={handleShow}>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            <div className="nav_btn">
                                <a href="/products" style={{color:'black'}}>Product</a>
                                {/* <a href="/login">Sign in</a> */}
                            </div>
                            <div id="ex4" className='cartsicon'>
                                <a href="/carts" className="text-dark">
                                    <span className="p1 fa-stack fa-2x has-badge" data-count={0}>
                                        <i className="p1 fa-solid fa-cart-shopping" />
                                    </span>
                                </a>
                            </div>

                            <div className="profile">
                                <Dropdown className="text-center">
                                    <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                                        <img src={userImg} alt="userImg" style={{ width: "50px", height:'50px', borderRadius:"50%" }} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <a href="#" className="text-dark">
                                                <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Profile
                                            </a>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            <a href="#" className="text-dark">
                                                <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Login
                                            </a></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            <a href="#" className="text-dark">
                                                <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;SignUp
                                            </a></Dropdown.Item>
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
                            <img src={userImg} alt="userImg" className='profile_img' />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body style={{ background: "black", }}>
                        <a href="/products" className="text-light text-decoration-none" onClick={handleClose}><i class="fa-solid fa-shop"></i>&nbsp;&nbsp;Product</a> <br />

                        <a href="/userprofile" onClick={handleClose} className="text-light text-decoration-none">
                            <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Profile
                        </a> <br />
                        <div className="text-light">
                            <i class="fa-solid fa-right-from-bracket"></i>&nbsp;&nbsp;&nbsp;Logout
                        </div>

                        <a href="/login" className="text-light text-decoration-none" onClick={handleClose}><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Sign in</a>

                        <div id="ex4" className=''>
                            <a href="/carts" className="text-ligth">
                                <span className="p1 fa-stack fa-2x has-badge" data-count={0}>
                                    <i className="p1 fa-solid fa-cart-shopping" style={{color:'white'}} />
                                </span>
                            </a>
                        </div>

                    </Offcanvas.Body>
                </Offcanvas>

            </header>
        </>
    )
}

export default Header