import React from 'react'

const ResetPassword = () => {  
    
    const handleSubmit = ()=>{}

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