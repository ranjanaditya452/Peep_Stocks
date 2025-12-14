import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className='sticky top-0 z-[9999] bg-white 
                   flex items-center justify-between 
                   px-4 py-3 pl-[7vw] h-16
                   w-full
                   md:px-16 md:h-20 md:text-xl
                   outline-2 outline-red-200'>
     <Link to="/">Peep-Stocks</Link>
     <div className='px-6 ml-[5rem] hidden lg:flex justify-between gap-5'>
      <Link to="/overview">Overview</Link>
      <div>Placeholder&nbsp;2</div>
      <div>Placeholder&nbsp;3</div>
     </div>
     <div className='flex ml-auto gap-2'>
      <div className=''>Contact Me</div>
      <div>Dashboard</div>
     </div>
   </div>   
  )
}

export default Navbar