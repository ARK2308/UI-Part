import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Select from 'react-select'
// import { Country, State } from 'country-state-city';
// import { useLocation, useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import Loader from '../../component/Loader/Loader';



const Shipping = () => {

    const [inpval, setInpval] = useState({
        mobile: "",
        city: "",
        pincode: "",
        address: ""
    });

    
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  


    const handleChange = (e) => {}

    const handleSubmit = (e) => {}

    



    useEffect(() => {
    }, [])

    return (
        <>
            {/* {
                spin ? <Loader /> : */}
                    <section>
                        <div className="form_data">
                            <div className="form_heading">
                                <h1>Shipping Details</h1>
                            </div>
                            <form>
                                <div className="form_input">
                                    <input type="text" value='' name="mobile" onChange={handleChange} placeholder='Enter Your Mobile' />
                                </div>
                                <div className="form_input mb-3">
                                    <Select options={options}  placeholder="select Your country" />
                                </div>
                                <div className="form_input mb-2">
                                    {/* <Select options={state} placeholder="select Your State" onChange={(e) => setFinalState(e.label)} /> */}
                                    <Select options={options} placeholder="select Your State" />
                                </div>
                                <div className="form_input">
                                    <input type="text" value='' name="city" onChange={handleChange} placeholder='Enter Your city' />
                                </div>
                                <div className="form_input">
                                    <input type="text" value='' name="pincode" onChange={handleChange} placeholder='Enter Your pincode' />
                                </div>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" name='address' value='' onChange={handleChange} placeholder='Shipping Address' rows={2} />
                                </Form.Group>

                                <button className='btn' onClick={handleSubmit}>send</button>

                            </form>
                        </div>
                    </section>
            {/* } */}
        </>
    )
}

export default Shipping