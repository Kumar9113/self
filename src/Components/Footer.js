import'./footer.css'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter, FaLinkedin } from 'react-icons/fa'
import React from 'react'

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size='20' style={{color:'#fff',marginRight:'2rem'
                     }}></FaHome> 
                     
           
                  <div>
                  <p>4/25-B Tekurpeta.</p>
                   <p>Kadapa</p>
                  </div>
                  
                
                </div>
            <div className='phone'>
               <h4> <FaPhone size='20' style={{color:'#fff',marginRight:'2rem'
                }}></FaPhone> +91-9113501465</h4>
            </div>

            <div className='email'>
               <h4> <FaMailBulk size='20' style={{color:'#fff',marginRight:'2rem'
                }}></FaMailBulk > gogulasukumar26@gmail.com</h4>
                </div>
        </div>
                

            <div className='rigth'> 
            <h4>About the company</h4>
            <p>This is the Kumar Gogula,Web Developer.I am having more skills about the Web technology</p>
            <div className='social'>
            <FaFacebook size='20' style={{color:'#fff',marginRight:'2rem'
                }}></FaFacebook >

            <FaTwitter size='20' style={{color:'#fff',marginRight:'2rem'
                }}></FaTwitter >

            <FaLinkedin size='20' style={{color:'#fff',marginRight:'2rem'
                }}></FaLinkedin >

            </div>
            </div>
        </div>
    </div>
  )
}

export default footer