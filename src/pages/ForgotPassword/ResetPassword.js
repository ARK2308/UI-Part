import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { forgotpasswordvalid } from '../../redux/slice/userAuthSlice/userAuthSlice';

const ResetPassword = () => {  

    const { id, token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const userValid = () => {
        const data = {
            id, token
        }
        dispatch(forgotpasswordvalid(data)).then((res) => {
            if (res.payload) {
                console.log("user valid")
            } else {
                navigate("*")
            }
        }).catch((error) => {
            navigate("*")

        })
    }
    
    const handleSubmit = ()=>{}

    
    useEffect(() => {
        userValid()
    }, [])

  return (
    <>
        <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Enter New Password</h1>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Enter NewPassword</label>
                            <input type="password"  name="password"  />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Confirm Password</label>
                            <input type="password"  name="confirmpassword" />
                        </div>

                        <button className='btn' onClick={handleSubmit}>Update Password</button>
                        
                    </form>
                </div>
            </section>
    </>
  )
}

export default ResetPassword