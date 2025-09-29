import React from 'react'

const Navbar = () => {
  return (
  //Homepage root div
  <div className='grid grid-cols-2 grid-rows-2 '>
    {/* Homepage header */}
   <div className='col-span-2 flex gap-20 py-3 pl-16 grow-none  '>
     <div className=' pr-4'>Peep-Stocks</div>
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
   {/*Title Area (left)*/}
   <div className='flex flex-col border-2 border-red-200'>
    <div className='text-5xl  '>Track it. Scroll it. Save it.</div>
    <div className=''>The open platform to track your stocks</div>
   </div>
  </div>
    
  )
}

export default Navbar