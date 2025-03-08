import React, { createContext, useEffect, useState } from 'react'
import { addToCart, cartItems, deleteItems, updateCart } from '../services'
import axios from 'axios'
import { toast } from 'react-toastify'

export const Globalcontext  = createContext()

export const GlobalcontextProvider = ({children}) => {

  const [cart, setCart]= useState([])

  const getCart = async ()=>{
    const response = await cartItems()
    setCart(response)
  }
 
  useEffect(()=>{ 
    getCart()
  },[])

    const cartLIst = cart && Object.entries(cart).map(([_id, cartitme]) => ({ _id, ...cartitme, })) || []

   const deleteData = async (id)=>{
    const response  = await deleteItems(id)
    
    getCart()
    toast.success('Item removed')
    console.log(response,'deleted')
}

    const updateItem = async (id,payload)=>{
        const response  = await updateCart(id,payload)
        console.log(response,'hello')
       return response
    }

     
  const addtocart = async (i)=>{
    const payload = {
      id:i.id,
      title: i.title,
      price: i.price,
      image: i.images[0],
      qty: 1
    }
    await addToCart(payload)
    toast.success('added to cart')
    getCart()
  }

      const handleAddUpdate = async (isinCart,i,sItem)=>{
    if(isinCart){
      const payload = {
        ...sItem,
        qty:sItem?.qty+1
      }
      const response = await updateItem(payload,sItem?._id)
      if(response.status == 200){
        toast.success('updated to cart')
        getCart()
      }
      else{
        toast.error('Failed to update')
      }
      console.log(response,'item')
    }
    else{
      addtocart(i)
    }
  }

  return <Globalcontext.Provider value={{cart,setCart,cartLIst,deleteData,updateItem,getCart,handleAddUpdate}}>
        {children}
    </Globalcontext.Provider>
 
}

