import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add,remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';


const Cartitem=({item,itemindex})=> {

  const dispatch=useDispatch();

  const removefromcart=()=>{
    console.log('remove from cart');
    dispatch(remove(item.id));
    toast.success("item removed");
    
  }

  return (
    <div>

      <div>
        <img src={item.image} width='100px'/>
      </div>

      <div>
        <h6 style={{color: "red"}}> {item.title}</h6>
        <h6> {item.description}</h6>
      </div>

      <div style={{display:"flex", justifyContent: "space-around", borderBottom: "2px solid violet" ,marginTop:"10px",marginBottom:"13px"}}>
        <p style={{color:"pink"}}>${item.price}</p>
        <div onClick={removefromcart} style={{cursor:"pointer"}}>
        <MdDelete />
        </div>
      </div>
    </div>
  )
}

export default Cartitem