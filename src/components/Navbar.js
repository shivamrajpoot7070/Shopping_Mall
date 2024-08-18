import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
      <div className='main'>

        <NavLink to={"/"} className='navlink'>
        <p style={{color:"red"}}> Shivam Ki Shop</p>
        </NavLink>


        <div className='items'>
          <NavLink to={"/"} className='navlink'>
          <p >Home</p>
          </NavLink>

          <NavLink to={"/cart"} style={{paddingLeft:"15px"}}>
          <FaShoppingCart  />
          </NavLink>
        </div>
      </div>   
    </div>
  )
}

export default Navbar