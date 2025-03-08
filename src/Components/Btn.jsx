import React from 'react'

const Btn = (props) => {
    const {title,onClick,key}= props
  return (
    <button key={key} className='text-[#B8B7B7] bg-white hover:bg-black rounded-xl hover:text-white py-2 w-[98px]' onClick={onclick}>{title}</button >
  )
}

export default Btn