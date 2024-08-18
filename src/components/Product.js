import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add,remove} from '../redux/Slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';
import { isAsyncThunkAction } from '@reduxjs/toolkit';
import "./products.css";


const  Product=({post})=>{

    const [selected,setselected]=useState(false);

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    const addtocart=()=>{
        dispatch(add(post));
        toast.success("Item added to cart");
    }

    const removeitem=()=>{
        dispatch(remove(post.id));
        toast.success("Item removed from cart");
    }

  return (
    <div style={{textAlign:"center"}}>
      <div>
        <div>
            <img src={post.image}style={{height:"40px"}}></img>
        </div>

        <div>
            <p style={{color:"red", borderBottom:"1px solid black"}}>{post.title}</p>
        </div>
        <div>
            <p>{post.description.split(" ").slice(0,10).join(" ")+
                "..."}</p>
        </div>
        
        <div>
        <p style={{color:"pink"}}>${post.price}</p>
        </div>


<div className="button-container">
  {
    cart.some((p) => p.id === post.id) ? (
      <button onClick={removeitem}>
        Remove item
      </button>
    ) : (
      <button onClick={addtocart}>
        Add to cart
      </button>
    )
  }
</div>


    </div>
</div>


  )
}

export default Product

