import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { NavLink,Link } from 'react-router-dom';
import Cartitem from '../components/Cartitem';
import "./cart.css";
const Cart=()=>{

  const {cart}=useSelector((state)=>state);  // fetch from slice to checck whether cart is empty or not

  const[totalamount,settotalamount]=useState(0);

  useEffect(()=>{
    settotalamount(cart.reduce((acc,curr)=>
      acc+curr.price,0));

  },[cart]);

  return (

    <div>
      {
      cart.length > 0 ? (  // if item is in cart
      <div className='mainnn'>
        <div className='cartitems'>
          {
            cart.map((item,index)=>{
              return <Cartitem key={item.id} item={item} itemindex={index}/>
            })
          }
        </div>
        
      <div className='cartsum'>
          <div style={{color:"red",fontSize:"20px"}}> Your cart</div>
          <div style={{color:"blue"}}> Summary </div>

          <p>
            <span> Total Items: {cart.length}</span>
          </p>
        

        <div>
          <p> Total amount : ${totalamount}</p>

          <button style={{color:"red", backgroundColor:"pink",minheight:"20px",width:"100px",marginTop:"10px",border:"none",cursor:"pointer"}}> checkout Now</button>
      </div>
      </div>


    </div>
      ) : 
      (
        <div className="centered-container">
        <div className="content">
          <h1>Cart is Empty</h1>
          <button className='shoppi'>
            <NavLink to="/">Shop Now</NavLink>
          </button>
        </div>
      </div>
      )
      }
    </div>

  )
}

export default Cart

