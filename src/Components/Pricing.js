import React from 'react'
import './pricing.css'
import { Link } from 'react-router-dom'
const Pricing = () => {
  return (
    <div  className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>--Basic--</h3>
                <span className='bar'></span>
                <p className='btc'>₹ 100</p>
                <p>--3 Days--</p>
                <p>--3 pages--</p>
                <p>--3 Featured--</p>
                <p>--Responsive Design--</p>
                <Link to='/About' className='btn'>PERCHASE NOW</Link>

            </div>
            <div className='card'>
                <h3>--Premium--</h3>
                <span className='bar'></span>
                <p className='btc'>₹ 200</p>
                <p>-2 Days--</p>
                <p>--5 pages--</p>
                <p>--3 Featured--</p>
                <p>--Responsive Design--</p>
                <Link to='/About' className='btn'>PERCHASE NOW</Link>

            </div>
            <div className='card'>
                <h3>--Business--</h3>
                <span className='bar'></span>
                <p className='btc'>₹ 300</p>
                <p>-5 Days--</p>
                <p>--8 pages--</p>
                <p>--3 Featured--</p>
                <p>--Responsive Design--</p>
                <Link to='/About' className='btn'>PERCHASE NOW</Link>

            </div>
            
        </div>
    </div>
  )
}

export default Pricing