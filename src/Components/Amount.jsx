import React from 'react'

const Amount = (props) => {
    const {price,title,count} = props
  return (
    <div className='flex justify-between pb-3 last:border-none border-b border-[#9E9E9E] border-dashed mb-7 '>
        <p className="font-semibold">{title}</p>
        <p className="font-semibold"><span className={`${!count && 'hidden'} text-xs text-[#8A8A8A]`}>({count} items)</span>$ {price}</p>
    </div>
  )
}

export default Amount