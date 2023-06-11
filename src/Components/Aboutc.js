import'./Aboutc.css'
import React from 'react'
import { Link } from 'react-router-dom'
import pro3 from '../img/033.jpg'
import pro33 from '../img/intro.jpg'

const Aboutc = () => {
  return (
    <div className='About'>
        <div className='left'>
            <h1>Who Am I</h1>
            <p>Im a react forn-end Developer.I Created responsive secure Websites for my clients</p>
            <Link to='/Contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top '>
                    <img src={pro33} className='img' alt='true'/>
                    </div>
                    <div className='img-stack buttom '>
                    <img src={pro3} className='img buttom' alt='true'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutc