import React, { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Cartitems from '../../Components/Cartitems'
import backhoodie from '../../images/backhoodie.png'
import Amount from '../../Components/Amount'
import Bigbtn from '../../Components/Bigbtn'
import { Link } from 'react-router'
import { Globalcontext } from '../../context.jsx/Globalcontext'
import {  toast } from 'react-toastify';

const Cart = () => {

  const {cartLIst,updateItem,getCart} = useContext(Globalcontext)

  console.log(cartLIst,'cartlist')
  
  const total = cartLIst?.reduce((acc,cart)=>acc+cart.price,0)

  
    const handleIncrement = async (isinCart,i,sItem)=>{
      console.log(sItem,'sitem')
      if(isinCart){
        const payload = {
          ...sItem,
          qty:sItem?.qty+1
        }
        const response = await updateItem(sItem?._id,payload)
        if(response.status == 200){
          toast.success('updated cart')
          getCart()
        }
        console.log(response,'item')
      }
      else{
        addtocart(i)
      }
    }

     const handleDecrement = async (isinCart,i,sItem)=>{
      console.log(sItem,'sitem')
      if(isinCart){
        const payload = {
          ...sItem,
          qty:sItem?.qty-1
        }
        const response = await updateItem(sItem?._id,payload)
        if(response.status == 200){
          toast.success('updated cart')
          getCart()
        }
        console.log(response,'item')
      }
      else{
        addtocart(i)
      }
    }

  return (
    <div className='p-7 w-[402px]'>
        <Nav title='Cart' notification='' to='/'/>
        
        {
          cartLIst?.map(i=>{
             const isinCart = cartLIst?.some(j=>j.id == i.id)
              const sItem = cartLIst?.find(j=>j.id == i.id)
            return (
              <Cartitems title={i.title} img={i?.image} price={i.price} count={i.qty} key={i.id} id={i._id} decrement={()=>handleDecrement(isinCart,i,sItem)} increment={()=>handleIncrement(isinCart,i,sItem)}/> 
            )
          })
        }

        <div className="p-4 flex justify-between items-center bg-white rounded-2xl mb-10">
          <p className="text-[#979797]">Promo Code</p>
          <button className='bg-black text-white px-5 py-2 rounded-xl'>Apply</button>
        </div>
        <Amount title='Order Amount' price={total} />
        <Amount title='Tax' price='10.00' />
        <Amount title='Total Payment' price='10.00' count={cartLIst.length}/>
        <Link to='/order'><Bigbtn title='Proceed To Checkout' /></Link>
        
    </div>
  )
}

export default Cart