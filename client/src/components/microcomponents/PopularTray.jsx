import React from 'react'

const PopularTray = () => {

 let btnStyle="text-2xl hover:cursor-pointer py-2 px-6 rounded-full border-1 border-[#e7e7e9] hover:bg-[#faf9fb]"
  return (
    <div className='flex gap-5 '>
        <strong className='text-2xl py-2'>Popular: </strong>
        <button className={`${btnStyle}`}>Nvidia</button>
        <button className={`${btnStyle}`}>Adani</button>
        <button className={`${btnStyle}`}>Google</button>
        <button className={`${btnStyle}`}>Tesla</button>
    </div>
  )
}

export default PopularTray