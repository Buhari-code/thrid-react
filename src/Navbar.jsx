import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";

function Navbar() {

  return (
    <div className="nav">
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About Us</Link>
      <button><FaBars /></button>
    </div>
  )
}

export default Navbar
