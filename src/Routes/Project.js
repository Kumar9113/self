import React from 'react'
import Heroimg2 from '../Components/Heroimg2'
import Work from '../Components/Work'

import { NavBar } from '../Components/NavBar'
import Footer from '../Components/Footer'
import Pricing from '../Components/Pricing'


const Project = () => {
  return (
    <div>
        <NavBar></NavBar>
       <Heroimg2 heading="PROJECT" text='Some of my most recent works'></Heroimg2>
       <Pricing></Pricing>
       <Work></Work>
       
        <Footer></Footer>
    </div>
  )
}

export default Project