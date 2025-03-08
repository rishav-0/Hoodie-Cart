import React from 'react'
import filter from '../images/filter.png'

const Search = () => {
  return (
    <div className='flex items-center justify-between rounded-lg bg-white shadow-xl'>
        <div className="ps-4 flex items-center gap-3">
            <i className="fa-light fa-magnifying-glass text-gray-400"></i>
            <input className='w-full outline-none' placeholder='Search clothes' type="text" />
        </div>
        <div className="h-[48px] w-[48px] rounded-lg bg-black flex items-center justify-center">
            <img src={filter} alt="" />
        </div>
    </div>

  )
}

export default Search