import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { AdminAddCategory } from '../../redux/slice/product/ProductSlice';

const AddCategory = () => {

  const dispatch = useDispatch();   
    const [inputvalue, setInputValue] = useState({
        categoryname: "",
        description: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue({ ...inputvalue, [name]: value })
    }
    const handleAddCategory = (e) => {
        e.preventDefault();

        const { categoryname, description } = inputvalue;

        if (categoryname == "") {
            toast.error("category name is Required!")
        } else if (description == "") {
            toast.error("description is Required!")
        } else {
            dispatch(AdminAddCategory(inputvalue)).then((res) => {
                setInputValue({ ...inputvalue, categoryname: "", description: "" })

            }).catch((error) => {
            })
        }
    }
// 
    return (
        <>
            <div className="container">
                <section>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1>Add Category</h1>
                        </div>

                        <form>
                            <div className="form_input">
                                <label htmlFor="category">Category Name</label>
                                <input type="text" value={inputvalue.categoryname} name="categoryname" onChange={handleChange}  id="category" />
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" value={inputvalue.description} name='description' onChange={handleChange}  rows={3} />
                            </Form.Group>

                            <button className='btn' onClick={handleAddCategory}>Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AddCategory