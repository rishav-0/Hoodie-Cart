import React from 'react'
import Nav from '../../Components/Nav'
import credit from '../../images/credit.png'
import Address from './Address'
import Payment from './Payment'
import gpay from '../../images/payment/gpay.png'
import visa from '../../images/payment/visa.png'
import master from '../../images/payment/master.png'
import payoneer from '../../images/payment/payoneer.png'
import Amount from '../../Components/Amount'
import Bigbtn from '../../Components/Bigbtn'
import { Link } from 'react-router'

const Order = (props) => {
  return (
    <div className='w-[402px] p-7'>
        <Nav title='Order' to='/'/>
        <img className='mb-10' src={credit} alt="" />
        <p className="font-semibold mb-4">Address</p>
        <Address user='John Cena' address='Sylet City Residence B-15 Lakhai ' />
        <p className="font-semibold mb-4 ">Payment Method</p>
        <div className="flex justify-between items-center mb-10">
            <Payment img={gpay} />
            <Payment img={master} />
            <Payment img={visa} />
            <Payment img={payoneer} />
            <div className="w-5 h-5 border-2 flex items-center justify-center rounded-full ">
                <i className="fas fa-plus"></i>
            </div>
        </div>
        <p className="font-semibold mb-4 ">Shipping to</p>
        <Amount title='Total Payment' price='148.00' />  
        <Bigbtn title='Confirm Order' />
        
    </div>
  )
}

export default Order