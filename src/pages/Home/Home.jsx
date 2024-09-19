import React, { useEffect, useState } from 'react'
import HomeContact from '../../components/HomeContacts/HomeContact'
import Homemain from '../../components/HomeMain/Homemain'
import HomeProduct from '../../components/HomeProducts/HomeProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getLatestProducts } from '../../redux/slice/product/ProductSlice'

const Home = () => {
  
  const { ProductsData } = useSelector((state) => state.Product);
  const { LatestProducts } = useSelector((state) => state.Product);


  const dispatch = useDispatch()
  const [page, setPage] = useState(1);
  const productApi = () => {
    const data = {
      selectedcategory: "all",
      page,
    };

    dispatch(getAllProducts(data))
      .then((res) => {
//  console.log("res", res)
      })
      .catch((err) => {
        console.log("error", err);
      });
      dispatch(getLatestProducts());
  };

    // product delete
    useEffect(() => {
      productApi();
    }, [page ] );
  return (
    <div>
        <Homemain />
        <HomeProduct ProductsData={ProductsData.getAllProducts} LatestProducts={LatestProducts} />
        <HomeContact />
    </div>
  )
}

export default Home