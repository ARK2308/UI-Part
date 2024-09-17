import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import { getCategory } from '../../redux/slice/product/ProductSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { AddProductscall, getCategory } from '../../redux/slice/productSlice/ProductSlice';
// import toast from 'react-hot-toast';

const AddProducts = () => {
    const dispatch = useDispatch()

    const {CategoryData} = useSelector((state)=>state.Product);
    const [categorystate,setCategoryState] = useState([]);

 

  useEffect(() => {
    dispatch(getCategory())
  }, [])

    

  useEffect(()=>{
    dispatch(getCategory())
},[])

useEffect(()=>{
    let arr = [];

    for(let i = 0;i<CategoryData.length;i++){
        let setcategoryvalue = {value:CategoryData[i]._id,label:CategoryData[i].categoryname};
        arr.push(setcategoryvalue)
    }

    setCategoryState(arr)
    
},[CategoryData])

  return (
    <>
       <div className="container">
                <section>
                    <div className="form_data">
                        <div className="form_heading">
                            <h1>Add Products</h1>
                        </div>

                        <form>
                            <div className="form_input">
                                <input type="text" name="productname"  placeholder='Products Name'/>
                            </div>
                            <div className="form_input">
                            <Select options={categorystate}  placeholder="Product category" />
                            </div>
                            <div className="form_input">
                                <input type="text" name="price"  placeholder='Price'/>
                            </div>
                            <div className="form_input">
                                <input type="text" name="discount"  placeholder='discount'/>
                            </div>
                            <div className="form_input">
                                <input type="file" name="productimage" />
                            </div>
                            <div className="form_input">
                                <input type="text" name="quantity"   placeholder='quantity'/>
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" name='description' rows={3} />
                            </Form.Group>

                            <button className='btn'>Submit</button>
                        </form>
                    </div>
                </section>
            </div>
    </>
  )
}

export default AddProducts