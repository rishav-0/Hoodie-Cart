import React from 'react'
import fashionhoodie from '../images/fashionhoodie.png'

const Popular = (props) => {
  const {title,price,img} = props
  return (
    <div className='p-1 rounded-lg flex items-center gap-3 w-[215px] min-w-[215px] bg-white'>
        <div className="w-[52px] flex items-end justify-center rounded-lg bg-[#D9D9D9] h-[52px]">
            <img className='' src={img} alt="" />
        </div>
        <div className="">
            <p className="">{title}</p>
            <p className="flex justify-between items-center font-bold">${price}.00 <i className="fas fa-heart"></i></p>
        </div>
    </div>
  )
}

export default Popular