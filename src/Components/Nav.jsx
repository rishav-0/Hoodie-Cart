import React from 'react'
import { Link } from 'react-router'

const Nav = (props) => {
  const {title,notification,to} = props
  return (
    <div className='flex justify-between items-center mb-14'>
        <Link to={to}><i className="fas fa-angle-left cursor-pointer"></i></Link>
        
        <p className="font-semibold text-2xl">{title}</p>
        <i class={`fa-regular fa-bell ${notification ? 'visible':'invisible'}`}></i>
    </div>
  )
}

export default Nav