import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Order, paymentProcess } from "../../redux/slice/paymentslice/PaymentSlice";
import toast from "react-hot-toast";
import { Deletecartdata } from "../../redux/slice/userAuthSlice/userAuthSlice";

const Payment = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const { payment } = useSelector((state) => state.Payment);
 
  const { state } = useLocation();
  const { UserLoggedIn } = useSelector((state) => state.User);

  
  const order = {
    ...state
  }


  const finalpayment = async () => {
    const result = await stripe.confirmCardPayment(payment, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: UserLoggedIn[0]?.firstname,
          email: UserLoggedIn[0]?.email,
          phone: state.mobile,
          address: {
            line1: state.address,
            city: state.city,
            state: state.state,
            postal_code: state.pincode,
            country: state.country,
          },
        },
      },
    });
    if (result.paymentIntent?.status === "succeeded") {
      order.paymentdetails = {
        paymentid: result.paymentIntent.id,
        status: result.paymentIntent.status,
      }
      dispatch(Order(order)).then((res) => {
        if (res?.payload) {
          dispatch(Deletecartdata())
        
          navigate("/userorders")
        }
      }).catch((error) => {
        console.log("error", error)
      })
    } else {
      toast.error("Enter All Details")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentamount = {
      totalamount: state.totalPrice * 100,
    };

    dispatch(paymentProcess(paymentamount));
  };

  useEffect(() => {
    if (payment.length > 0) {
      finalpayment()
      
    }
  
  }, [payment])

  return (
    <>
      <section className="sectionset">
        <div className="form_data">
          <div className="form_heading">
            <h1>Enter Card Details</h1>
          </div>
          <form action="">
            <div className="form_inputs mb-2">
              <CardNumberElement />
            </div>
            <div className="form_inputs mb-2">
              <CardExpiryElement />
            </div>
            <div className="form_inputs">
              <CardCvcElement />
            </div>
            <button className="btn" onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Payment;
