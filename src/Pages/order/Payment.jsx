import React from 'react'

const Payment = (props) => {
    const {img} = props
  return (
    <div className='bg-white w-9 h-5 flex items-center justify-center rounded-lg cursor-pointer'>
        <img src={img} alt="" />
    </div>
  )
}

export default Payment