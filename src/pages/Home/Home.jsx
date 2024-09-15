import React from 'react'
import HomeContact from '../../components/HomeContacts/HomeContact'
import Homemain from '../../components/HomeMain/Homemain'
import HomeProduct from '../../components/HomeProducts/HomeProduct'

const Home = () => {
  return (
    <div>
        <Homemain />
        <HomeProduct />
        <HomeContact />
    </div>
  )
}

export default Home