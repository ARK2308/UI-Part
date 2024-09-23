import { CardCvcElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { paymentProcess } from '../../redux/slice/paymentslice/PaymentSlice';


const Payment = () => {

const dispatch = useDispatch()
  
  const { state } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const paymentamount = {
      totalamount: state.totalPrice * 100
    }

    dispatch(paymentProcess(paymentamount))
  }
  return (
    <>
          <section className='sectionset'>
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
                <button className='btn' onClick={handleSubmit} >Send</button>
              </form>
            </div>
          </section>
    </>
  )
}

export default Payment
