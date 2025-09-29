import React from 'react'

const Navbar = () => {
  return (
  <div className='flex flex-col '>
   <div className='flex py-3 pl-16 border-2 border-red-200'>
     <div className='border-r-2 border-gray-300 pr-4'>Peep-Stocks</div>
     <div className='flex justify-between w-100 px-6 border-2 border-red-200 '>
      <div>Placeholder&nbsp;1</div>
      <div>Placeholder&nbsp;2</div>
      <div>Placeholder&nbsp;3</div>
     </div>
     <div className='flex ml-auto pr-10 gap-4'>
      <div className=''>Contact Me</div>
      <div>Dashboard</div>
     </div>
   </div>
   <div className='flex justify-center content-center grow  border-red-200'>
    <h1 className='text-5xl  border-blue-500'>Track it. Scroll it. Save it.</h1>
   </div>
  </div>
    
  )
}

export default Navbar