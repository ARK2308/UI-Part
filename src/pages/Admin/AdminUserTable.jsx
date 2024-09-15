import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import {NavLink} from "react-router-dom"
import "./tabel.scss"
// import Paginations from '../../component/Pagination/Paginations';
// import { useDispatch } from 'react-redux';
// import { deleteuser } from '../../redux/slice/adminAuthSlice/AdminSlice';

const AdminUserTable = () => {

    const handleDeleteUser = ()=>{

    }

  return (
    <>
         <div className="container">
            <h4>Users</h4>
        <Row>
          <div className="col mt-0 mb-3">
            <Card className='shadow'>
              <Table className='align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                   
                    
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {
                   getAlluserdata?.usersdata?.length > 0 ? getAlluserdata?.usersdata?.map((element, index) => {
                      return (
                        <> */}
                          <tr>
                            <td>index + 1 + (page - 1)*4</td> 
                            <td>element.firstname</td>
                            <td>element.email</td>
                           
                           
                            <td className='img_parent'>
                              <img src='element.userprofile' alt="img" />
                            </td>
                            <td>
                              <Dropdown>
                                <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                                  <i class="fa-solid fa-ellipsis-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                 
                                  <Dropdown.Item >
                                    <div onClick={()=>handleDeleteUser()}>
                                      <i class="fa-solid fa-trash" style={{ color: "red" }}></i> <span>Delete</span>
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </td>
                          </tr>
                        {/* </>
                      )
                    }) : */}
                     <div className='no_data text-center'>NO Data Found</div>
                  {/* } */}


                </tbody>
              </Table>
              {/* <Paginations
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                    page={page}
                    pageCount={pageCount}
                    setPage={setPage}
                     /> */}
            </Card>
          </div>
        </Row>
        
      </div>
    </>
  )
}

export default AdminUserTable