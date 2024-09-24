import React, { useEffect, useState } from 'react'
import ProductDetailsMain from '../../components/ProductDetailsMain/ProductDetailsMain'
import Loader from '../../components/Loader/Loader';

const ProductDetailsPage = () => {


  const [spin, setSpin] = useState(true);

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  }, []);
  return (
    <>
    {
      spin ? <Loader />:  <ProductDetailsMain />
    }
      
    </>
  )
}

export default ProductDetailsPage