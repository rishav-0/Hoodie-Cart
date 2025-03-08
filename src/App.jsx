import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Cart from './Pages/Cart/Cart'
import Home from './Pages/home/home'
import Order from './Pages/order/Order'
import { Route, Routes } from 'react-router'
import axios from 'axios'
import { getData } from './services'


function App() {

  

  const [products,serProducts] = useState([])
  


  const getProducts = async ()=>{
    serProducts(await getData())
    // await axios.get(ApiUrl).then(res=>serProducts(res.data)).catch(err=>console.log(err))

  }

  // console.log(products)

  useEffect(()=>{
    getProducts()
  },[])

  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home products={products}/>}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/order' element={<Order />}></Route>
    </Routes>
    
    </> 
  )
}

export default App
