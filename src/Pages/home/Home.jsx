import React, { useContext, useState } from 'react'
import Search from '../../Components/Search'
import { category } from '../../utils'
import Btn from '../../Components/Btn'
import ProductCard from '../../Components/ProductCard'
import fashionhoodie from '../../images/fashionhoodie.png'
import gray from '../../images/gray.png'
import Popular from '../../Components/Popular'
import { Link } from 'react-router'
import { addToCart } from '../../services'
import { Globalcontext } from '../../context.jsx/Globalcontext'
import {  toast } from 'react-toastify';

const Home = (props) => {

  const {cartLIst,updateItem,getCart,handleAddUpdate} = useContext(Globalcontext)

  console.log(cartLIst,'list')

  // const addToCart = (i)=>{
  //   const exist = cart.find(item=>item.id===i.id)
  //   if (exist) {
  //   setCart(cart =>
  //     cart.map(item =>
  //       item.id === i.id ? { ...item, qty: item.qty + 1 } : item
  //     )
  //   );
  // } else {
  //   setCart(cart => [...cart, { ...i, qty: 1 }]);
  // }

  // }

  const {products} = props
 
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


  return (
    <div className='w-[402px]'>
      <div className="flex justify-between items-center p-7 ">
        <i className="fa-solid fa-bars-staggered"></i>
        <img className='h-10 w-10  rounded-full object-contain' src="https://api.skillsmarket.tv/downloads/images/6203e3c40ed4627a04a3aa08/avatar.jpg?w=500&h=500&c=true&q=80" alt="" />
      </div>
      <div className="p-7">
        <p className="text-2xl font-bold ">Discover</p>
        <p className="text-2xl font-bold ">our new items</p>
      </div>
      <div className="p-7">
        <Search /> 
      </div>
      <div className="flex justify-between px-7 mb-10">
        {
          category.map(i=>{
            return (
              <Btn title={i} key={i}/>
            )
          })
        }
      </div>
        {/* <div className="flex justify-between px-7 mb-10">
          <ProductCard disabled={false} title='Oversized hoodie' price='48.00' img={backhoodie}/>
          <ProductCard disabled={true} title='Drawstring Hoodie' price='50' img={hair}/>
        </div> */}

        <div className="flex overflow-x-auto no-scrollbar justify-between gap-9 px-7 mb-10">
          {
            products.map(i=>{
              const isinCart = cartLIst?.some(j=>j.id == i.id)
              const sItem = cartLIst?.find(j=>j.id == i.id)
              
              return (
                <ProductCard disabled={false} title={i.title} isinCart={isinCart} key={i.id} price={i.price} img={i.images[0]} id={i.id} cartid={sItem?._id} addToCart={()=>handleAddUpdate(isinCart,i,sItem)}/>
              )
            })
          }
        </div>
        <p className="text-xl mb-9 px-7">Popular Products</p>
        <div className="flex flex-row ps-7 no-scrollbar mb-10 flex-nowrap gap-4 overflow-y-auto">
          <Popular title='Drawstring Hoodie' price='50' img={fashionhoodie}/>
          <Popular img={gray} title='Reebok hoodie' price='40'/>
          <Popular title='Drawstring Hoodie' price='50' img={fashionhoodie}/>
          <Popular img={gray} title='Reebok hoodie' price='40'/>
        </div>
        <div className="px-7">
          <div className="flex justify-between items-center px-7 p-4 rounded-xl text-white bg-[#191F28]">
          <Link to='/'><i className="fa-solid fa-house cursor-pointer"></i></Link>
          <Link to='/cart'><i className="fa-light fa-cart-shopping cursor-pointer"></i></Link>
          <i className="fa-regular fa-heart cursor-pointer"></i>
          <i className="fa-regular fa-user cursor-pointer"></i>
        </div>
        </div>
        
    </div>
  )
}

export default Home