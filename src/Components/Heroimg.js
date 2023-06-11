import './Heroimg.css'
import intro from'../img/intro.jpg'
import { Link } from 'react-router-dom'



import React from 'react'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
        <img className='intro-img'src={intro} alt='intro'></img>
        </div>
        <div className='content'>
          <p>HI, I'M FREELANCER</p>
          <h1>React Developer</h1>
          <div>
            <Link to='/Project' className='btn'>Project</Link>
            <Link to='/Contact'className='btn btn-light'>Contact</Link>

          </div>
        </div>
       
    </div>
    
  )
}

export default Heroimg