import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { Ordersforadmin } from '../../redux/slice/adminAuthSlice/AdminSlice';
import "./order.scss";

const Orders = () => {
  const dispatch = useDispatch();
  const { OrdersData } = useSelector((state) => state.Admin);

  

  const getOrdersAdmin = () => {
    dispatch(Ordersforadmin());
  };

  useEffect(() => {
    getOrdersAdmin();
  }, []);

  return (
    <>
      <div className="container mb-3">
        <h3>Orders</h3>
        <Row>
          <div className="col mt-0">
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>Total Price</th>
                    <th>Order Items</th>
                    <th>User ID</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {OrdersData.length > 0 ? (
                    OrdersData.map((element, index) => {
                      return (
                        <tr key={index}>
                          <td>{element._id}</td>
                          <td>{element.totalPrice}</td>
                          <td>{element.orderItems.join(', ')}</td>
                          <td>{element.userId}</td>
                          <td>
                            <Badge bg="success">Confirmed</Badge>
                          </td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle id="dropdown-basic">
                                Update Status
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item>Confirm</Dropdown.Item>
                                <Dropdown.Item>Shipped</Dropdown.Item>
                                <Dropdown.Item>Delivered</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                          <td>
                            <div>
                              <i className="fa-solid fa-trash" style={{ color: "red" }}></i>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Orders;
