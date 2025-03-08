import React, { useContext } from 'react'
import backhoodie from '../images/backhoodie.png'
import { Globalcontext } from '../context.jsx/Globalcontext'

const Cartitems = (props) => {
    const {title,price,count,img,key,id,increment,decrement} = props
    const {deleteData} = useContext(Globalcontext)

  return (
    <div className='flex gap-4 items-center mb-9' key={key}>
        <div className="rounded-lg min-w-[84px] h-[72px] overflow-hidden flex items-end justify-center bg-[#e3e3e3]">
            <img className=' min-w-[84px] h-[72px] object-contain' src={img} alt="" />
        </div>
        <div className="w-[132px]">
            <p className="truncate font-bold ">{title}</p>
            
            <p className="font-bold">${price}.00</p>
        </div>
        
        <div className="flex items-center gap-3">
            <div className="border border-black cursor-pointer rounded-full h-8 w-8 flex items-center justify-center">
                {/* <i className="fas fa-minus" onClick={()=>deleteData(id)}></i> */}
                <i className="fas fa-minus" onClick={count <1 ? deleteData(id): decrement}></i>
            </div>
            <p className=" font-bold">{count}</p>
            <div className="bg-black cursor-pointer rounded-full h-8 w-8 flex items-center justify-center">
                <i className="fas fa-plus text-white" onClick={increment}></i>
            </div>
        </div>
    </div>
  )
}

export default Cartitems