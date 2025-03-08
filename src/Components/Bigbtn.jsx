import React from 'react'

const Bigbtn = (props) => {
    const {title,onClick} = props
  return (
    <button className='bg-[#191F28] py-3 w-full text-xl text-white rounded-2xl' onClick={onClick}>{title}</button>
  )
}

export default Bigbtn