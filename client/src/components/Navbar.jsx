import React from 'react'

const Navbar = () => {
  return (
   <div className='sticky top-0 z-[9999] bg-white 
                   flex items-center justify-between 
                   px-4 py-3 pl-[7vw] h-16
                   w-full
                   md:px-16 md:h-20
                   outline-2 outline-red-200'>
     <div className=''>Peep-Stocks</div>
     <div className='px-6 ml-[5rem] hidden md:flex justify-between gap-5'>
      <div>Placeholder&nbsp;1</div>
      <div>Placeholder&nbsp;2</div>
      <div>Placeholder&nbsp;3</div>
     </div>
     <div className='flex ml-auto gap-4'>
      <div className=''>Contact Me</div>
      <div>Dashboard</div>
     </div>
   </div>   
  )
}

export default Navbar