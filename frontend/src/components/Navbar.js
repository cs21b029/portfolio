import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
// import { FaHome } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>K Bhargava Chaitanya</h1>
        <div className="Links">
            {/* <FaHome/> */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar
