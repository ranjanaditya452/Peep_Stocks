import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import SearchBar from '../microcomponents/SearchBar'


const Navbar = () => {

  const location = useLocation();

  const isHome = location.pathname==="/";
  return (
   <div className='sticky top-0 z-9999 bg-white 
                   flex items-center justify-between 
                   px-4 py-3 pl-[7vw] h-16
                   w-full
                   md:px-16 md:h-20 md:text-xl
                   border-b border-gray-200'>
     <Link to="/">Peep-Stocks</Link>
     <div className='px-4 ml-20 hidden md:flex justify-between gap-2'>
      <Link to="/overview">Overview</Link>
      <div>Placeholder&nbsp;2</div>
     </div>
     {!isHome && <SearchBar/>}
     <div className='flex ml-auto gap-2'>
      <div className=''>Contact Me</div>
      <div>Dashboard</div>
     </div>
   </div>   
  )
}

export default Navbar