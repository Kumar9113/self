import React from 'react'
import Form from '../Components/Form'

import { NavBar } from '../Components/NavBar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'

const Contact = () => {
  return (
    <div>
       <NavBar></NavBar>
      <Heroimg2 heading='CONTACT' text="Let's have a chat." ></Heroimg2>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default Contact