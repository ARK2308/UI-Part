import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap"

import './cartsmain.scss';
import { useSelector } from 'react-redux';

const CartsMain = () => {

  const { userCartData } = useSelector((state) => state.User);
  const [price, setPrice] = useState("");


  const total = () => {
    let totalprice = 0;

    userCartData.map((ele, index) => {
      totalprice = ele.productDetails?.price * ele?.quantity + totalprice;
    });

    setPrice(totalprice);
  };



  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Container className="pt-4 pb-4">
        <h2 className="text-center">Shopping Cart</h2>
        {/* {
          userCart?.length > 0 ?  */}
          <Row className="mt-5 gap-3 gap-md-0 gap-lg-0">
          <Col lg={8} md={7}>

            <Card className="card">
              <Card.Title>Cart items</Card.Title>
              {
                userCartData.map((element , index)=>{
                  return(
                    <>

<div className={true ? "mt-2 store-item bottom-line pb-3" : "store-item mt-2"}>
                        <Row>
                          <Col lg={3}>
                            <img className="image-store" src={element.productDetails?.productimage} alt="" />
                          </Col>
                          <Col lg={9}>
                            <div className="mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
                              <h4>{element.productDetails?.productname}</h4>
                              <div>
                                <div className="btn-quantity-container d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                  <Button className="btn-quantity" variant="light" >&minus;</Button>
                                  <span className="p-quantity">{element.quantity}</span>
                                  <Button className="btn-quantity" variant="light" >+</Button>
                                </div>
                              </div>
                            </div>
                            <div className="list-store d-flex align-items-center justify-content-between">
                              <p>{element.productDetails?.discount}%</p>
                            </div>
                            <div className="list-store d-flex align-items-center justify-content-between">
                    <p>Price :- {element.productDetails?.price} ₹</p>
                            </div>
                            <div className="list-store d-flex align-items-center justify-content-between">
                              <p>Delivery date :- dateAfter2Days</p>
                            </div>
                            <div className="list-store d-flex align-items-center justify-content-between">
                              <div className="d-flex gap-2">
                                <Button className="btn-list" variant="danger" size="xsmall">
                                  <i className="fa fa-trash"></i>
                                  <span> Remove Item</span>
                                </Button>
                                <Button className="btn-list" variant="secondary" size="xsmall">
                                  <i className="fa fa-heart"></i>
                                  <span> Move To Wish List</span>
                                </Button>
                              </div>
                              <div className="d-flex">
                              Total :-{" "}
                                  {element.productDetails?.price *
                                    element?.quantity}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <hr />
                    </>
                  )
                })
              }
             
                    
          
            </Card>


          </Col>
          <Col lg={4} md={5}>
            <Row className="gap-3">
              <Col>
                <Card className="card">
                  <Card.Title>The total amount of</Card.Title>
                  <div className="store-item mt-2">
                    <Row>
                      <Col>
                        <div className="list-store d-flex align-items-center justify-content-between">
                          <p>Temporary amount</p>
                          <p>{price}</p>
                        </div>
                        {/* <div className="list-store d-flex align-items-center justify-content-between">
                          <p>Shipping</p>
                          <p>Gratis</p>
                        </div> */}
                        <div className="bottom-line"></div>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col className="col-6">
                        <p className="p-total-label">The total amount of (Including VAT)</p>
                      </Col>
                      <Col className="col-6">
                        <p className="p-total">{price}</p>
                      </Col>
                    </Row>
                    <Row className="mt-1">
                      <Col>
                        <Button className="w-100"  variant="primary" size="medium" block>
                          Go To Checkout
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* :<EmptyCart /> */}
        {/* }
         */}

      </Container>
    </>
  )
}

export default CartsMain