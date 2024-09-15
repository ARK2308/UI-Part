import React from 'react'

// import toast from 'react-hot-toast';

const ForgotPassword = () => {
    
  return (
    <>
          <section style={{marginBottom:"10%"}}>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>ForgotPassword</h1>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>

                        <button className='btn'>Submit</button>
                        
                    </form>
                </div>
            </section>
    </>
  )
}

export default ForgotPassword