import React from 'react'
import Heroimg from '../Components/Heroimg'
import { NavBar } from '../Components/NavBar'
import Footer from '../Components/Footer'
import Work from '../Components/Work'

const Home = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Heroimg></Heroimg>
        <Work></Work>
        <Footer></Footer>
    </div>
  )
}

export default Home