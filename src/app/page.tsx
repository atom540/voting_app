import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import LandingPage from '../../components/home/LandingPage'
const page = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  )
}

export default page
