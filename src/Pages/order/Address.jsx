import React from 'react'

const Address = (props) => {
    const {user,address} = props
  return (
    <div className="rounded-2xl p-5 bg-white mb-10">
        <p className="font-semibold">{user}</p>
        <p className="text-gray-400">{address}</p>
        <div className="text-right ">
            <button className='text-right text-xs bg-[#F5F8FE] p-1 font-light'>Change address</button>
        </div>
    </div>
  )
}

export default Address