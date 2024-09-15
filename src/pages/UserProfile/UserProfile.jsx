import React from 'react';
import './userprofile.scss';

const UserProfile = () => {

    const handleOrders = ()=>{};

  return (
    <>
    <div className="wrapper mt-5 mb-5">
      <div className="left">
        <img src='https://res.cloudinary.com/abdul5000/image/upload/v1698586142/qlbeoms6wevghueo0bfp.jpg' alt="user" width="100" />
        <h4>userLoggedIn[0]?.firstname</h4>
        <p>UI Developer</p>
      </div>
      <div className="right">
        <div className="info">
          <h3>Information</h3>
          <div className="info_data">
            <div className="data">
              <h4>Email</h4>
              <p>userLoggedIn[0]?.email</p>
            </div>

          </div>
        </div>

        <div className="projects">
          <h3>Orders</h3>
          <div className="projects_data">
            <div className="data">
              <h4>Total Orders</h4>
              <p style={{ fontSize: "20px" }}>userOrders?.length</p>
            </div>
            <div className="data">
              <button className='btn btn-primary' onClick={handleOrders}>see Orders</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>
  )
}

export default UserProfile