import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../microcomponents/SearchBar'



const Navbar = () => {
  const [toggledSearchState, setToggledSearchState] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  function toggleSearch() {
    setToggledSearchState(prev => !prev);
  }

  return (
    <div className='sticky top-0 z-9999 bg-white'>
      <div className='flex items-center justify-between
                     px-4 py-3 pl-[7vw] h-16
                     w-full
                     md:px-16 md:h-20 md:text-xl
                     border-b border-gray-200'>
        <Link to="/">Peep-Stocks</Link>
        <div className='px-4  hidden lg:flex justify-between gap-2'>
          <Link to="/overview">Overview</Link>
          <div>Placeh&nbsp;2</div>
        </div>
        {!isHome &&
          <div className='hidden lg:block'>
            <SearchBar />
          </div>}
        {isHome ? null :
          <div className='relative'>
            <button onClick={toggleSearch} className='w-4 h-4 hover:cursor-pointer
                                                      flex items-center justify-center
                                                      relative 
                                                      sm:w-6 sm:h-6 lg:hidden
                                                      outline-2 outline-gray-500 rounded-full'>
              <img src="/search.svg" alt="search" />
            </button></div>}
        <div className='flex  gap-2'>
          <div className=''>Contact Me</div>
          <div>Dashboard</div>
        </div>
      </div>

      <div className='h-14 bg-white px-4 py-2'>
        {!isHome && toggledSearchState && <SearchBar />}
      </div>
    </div>
  )
}

export default Navbar