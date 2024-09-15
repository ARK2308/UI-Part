import React, { useState } from 'react'
import { NavLink } from "react-router-dom"



const Register = () => {

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const handleChange = ()=>{}
    const setProfile = ()=>{}
    const handleSubmit = ()=>{}
    
    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                    </div>
                    <div className="profile_div text-center">
                        <img src="" alt="img" style={{ width: "50px" }} />
                    </div>
                    <form>
                        <div className="form_input">
                            <input type="text" value='' name="firstname" onChange={handleChange} id="fname" placeholder='Enter Your Name' />
                        </div>

                        <div className="form_input">
                            <input type="text" value='' name="lastname" id="lastname" onChange={handleChange} placeholder='Enter Your Last Name' />
                        </div>

                        <div className="form_input">
                            <input type="email" value='' name="email" onChange={handleChange} id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <input type="file" name="userprofile" onChange={setProfile} />
                        </div>

                        <div className="form_input">
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} value='' onChange={handleChange} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} value='' onChange={handleChange} name="confirmpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={handleSubmit}>Sign Up</button>
                        <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register