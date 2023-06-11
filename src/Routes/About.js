import React from 'react'
import Aboutc from '../Components/Aboutc'
import { NavBar } from '../Components/NavBar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'

const About = () => {
  return (
    <div>
       <NavBar></NavBar>
       <Heroimg2 heading='ABOUT'  text="I am a friendly Front-End Developer.."></Heroimg2>
       <Aboutc></Aboutc>
      <Footer></Footer>
    </div>
  )
}

export default About