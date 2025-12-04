import React from 'react'

const PopularTray = () => {

 let btnStyle="text-xl hover:cursor-pointer py-2 px-6 rounded-full border-1 border-[#e7e7e9] hover:bg-[#faf9fb]"
  return (
    <div className='grid grid-cols-2 gap-1.5 md:grid-cols-3'>
        <button className={`${btnStyle}`}>Nvidia</button>
        <button className={`${btnStyle}`}>Microsoft</button>
        <button className={`${btnStyle} col-span-2 md:col-span-1`}>Meta</button>
    </div>
  )
}

export default PopularTray