import './NavBar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'

export const NavBar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=>
    {
        setClick(!click);
    }
    const[color,setColor]=useState(false)
    const changeHandler=()=>
    {
        if(window.scrollY>=100)
        {
            setColor(true);
        }
        else(setColor(false))
    }
    window.addEventListener("scroll",changeHandler);
  return (
    <div className={color?'Header Header-bg':'Header'}>
        <Link to="/">
            <h1>PortFolia</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/Project'>Project</Link>
            </li>
            <li>
            <Link to='/About'>About</Link>
            </li>
            <li>
            <Link to='/Contact'>Contact</Link>
            </li>
            
        </ul>
        <div className='hamburger' onClick={handleClick} >
            {click?
        <FaTimes  size='20'color='white'></FaTimes>:
       <FaBars  size='20'color='white'></FaBars>}
        </div>
    </div>
  )
}
