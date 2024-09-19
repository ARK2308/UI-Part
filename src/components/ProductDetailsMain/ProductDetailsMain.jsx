import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Addreview, getSingleProducts, productsReview, reviewDelete } from '../../redux/slice/productSlice/ProductSlice';
// import { AddtoCart } from '../../redux/slice/userAuthSlice/userAuthSlice';
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import { Form } from "react-bootstrap";
import "./ProductDetailsmain.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProducts } from "../../redux/slice/product/ProductSlice";
import toast from "react-hot-toast";

const ProductDetailsMain = () => {
  const { singleProducts } = useSelector((state) => state.Product);
  const { UserLoggedIn } = useSelector((state) => state.User);


  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  const { id } = useParams();
  const getProductsDetails = () => {
    const data = {
      productid: id,
    };

    dispatch(getSingleProducts(data));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleOpenModel = () => {
    if (UserLoggedIn.length == 0) {
        toast.error("Please Login Before Write Review");
        navigate("/adminlogin")
    } else {
        handleShow()
    }
}

  useEffect(() => {
    getProductsDetails();
  }, [id]);

  return (
    <>
      <div className="cart_section">
        <h2 className="text-center">Product Details</h2>
        <div className="cart_container">
          <div className="left_cart">
            <img src={singleProducts[0]?.productimage} alt="cart" />
          </div>
          <div className="right_cart">
            <h3>{singleProducts[0]?.productname}</h3>
            {/* {
                            showrating ? */}
            <div className="reviewicon">
              {/* {
                                    Array.from({ length: showrating }).map((el, ind) => {
                                    })
                                } */}
              {/* return  */}
              <i class="fa-solid fa-star"></i>
              <span> &nbsp; &nbsp;Rating</span>
            </div>{" "}
            : "no rating"
            {/* } */}
            <p className="mrp">M.R.P. : ₹ {singleProducts[0]?.price} </p>
            <div className="discount_box">
              <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>
                  {singleProducts[0]?.discount}
                </span>{" "}
              </h5>
              <p>
                Iteams left :{" "}
                <span style={{ color: "#B12704" }}>
                  {singleProducts[0]?.quantity}
                </span>
              </p>
              <h4>
                FREE Delivery :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Oct 8 - 21
                </span>{" "}
                Details
              </h4>
              <p style={{ color: "#111" }}>
                Fastest delivery:{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  {" "}
                  Tomorrow 11AM
                </span>
              </p>
            </div>
            <p className="description">
              About the Iteam :{" "}
              <span
                style={{
                  color: "#565959",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.4px",
                }}
              >
                {singleProducts[0]?.description}
              </span>
            </p>
            <div className="addtocart">
              <Button className="btn mt-3 addcartbtn" variant="dark">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* review code */}
        <div className="container" style={{ width: "100%" }}>
          <div className=" d-flex justify-content-between">
            <h3>Customer Review</h3>
            <button className="btn btn-primary" onClick={handleShow}>
              Write A review
            </button>
          </div>
          <div className="mt-2 mb-5 d-flex justify-content-between flex-wrap">
            {/* {
                            productreview?.length > 0 ? productreview?.map((element, index) => {
                                return (
                                    <> */}
            <Card style={{ width: "20rem" }} className="mb-3">
              <Card.Body>
                <Card.Title>element.username</Card.Title>

                <Card.Text className="d-flex" style={{ color: "#f5d742" }}>
                  {/* {
                                                        Array.from({ length: element.rating }).map((el, ind) => {
                                                            return <i class="fa-solid fa-star"></i>
                                                        })
                                                    } */}
                  <i class="fa-solid fa-star"></i>
                </Card.Text>

                <Card.Text>element.description</Card.Text>
                {/* {
                                                    userLoggedIn[0]?._id === element?.userid ? <Button variant='none' onClick={() => handleReviewDelete(element._id)}> <i class="fa-solid fa-trash" style={{ color: "red" }}></i></Button> : ""
                                                } */}
                <Button variant="none">
                  {" "}
                  <i class="fa-solid fa-trash" style={{ color: "red" }}></i>
                </Button>
              </Card.Body>
            </Card>
            {/* </>
                                )
                            }) : */}
            <div>No review</div>
            {/* } */}
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Write Your Review Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form_data">
              <form>
                <div className="form_input">
                  <label htmlFor="username">Your Name</label>
                  <input type="text" name="username" id="username" disabled />
                </div>
                <div className="form_input">
                  <label htmlFor="username">Give The Rating</label>
                  <Select options={options} />
                </div>
                <Form.Group
                  className="mb-3 mt-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" name="description" rows={3} />
                </Form.Group>

                <button className="btn">Submit</button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ProductDetailsMain;
