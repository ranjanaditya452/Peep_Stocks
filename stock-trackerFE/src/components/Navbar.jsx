import React from 'react'

const Navbar = () => {
  return (
  
  <>
   <div className='flex items-center gap-20 py-3 pl-16 h-20 grow-none outline-2 outline-red-200'>
     <div className=' pr-4'>Peep-Stocks</div>
     <div className='flex justify-between gap-15 px-6 '>
      <div>Placeholder&nbsp;1</div>
      <div>Placeholder&nbsp;2</div>
      <div>Placeholder&nbsp;3</div>
     </div>
     <div className='flex ml-auto pr-10 gap-8'>
      <div className=''>Contact Me</div>
      <div>Dashboard</div>
     </div>
   </div>   
  </>
    
  )
}

export default Navbar