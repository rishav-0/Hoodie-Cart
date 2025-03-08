import React, { useContext } from 'react'
import backhoodie from '../images/backhoodie.png'
import { Globalcontext } from '../context.jsx/Globalcontext'

const ProductCard = (props) => {
  const {img,title,price,disabled,key,addToCart,isinCart,id,cartid} = props
  const {deleteData} = useContext(Globalcontext)
  return (
    <div className='p-1 mb-4 w-[155px] min-w-[155px] bg-white rounded-lg' key={key}>
        <div className="mb-3 flex justify-center rounded-lg bg-[#E3E3E3] overflow-hidden h-[90px] object-contain">
            <img className='' src={img} alt="" />
        </div>
        <p className="-xs font-medium line-clamp-1">{title}</p>
        <div className="flex justify-between items-center">
            <p className="text-xs -medium">${price}.00</p>
            {isinCart ?<p className="text-xs text-red-400 font-semibold cursor-pointer p-1" onClick={()=>{deleteData(cartid)}}>Remove</p>:
            <button className={`w-7 h-7 flex items-center justify-center  rounded-full ${disabled ? 'bg-[#D9D9D9]':'bg-black'} ${isinCart && 'bg-orange-500'}`}>
                <i className="fas fa-plus text-white shadow-sm" onClick={addToCart}></i>
            </button>}
            
            
        </div>
    </div>
  )
}

export default ProductCard