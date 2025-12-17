import React, { useState } from 'react'
import searchIcon from '../../assets/searchIcon.svg'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className='w-full relative group'>
          <input type="search"
            placeholder="Eg. AAPL"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            className='w-full pl-6 pr-15 text-base rounded-full h-8 border-3
                       md:text-2xl md:h-12
                       border-gray-300 focus:border-[rgb(231,170,190)]
                       group-hover:border-[rgb(231,170,190)]
                       focus:outline-none bg-gray-100'/>

            <button className='absolute right-3 top-1
                               flex place-content-center 
                               w-6 h-6
                               md:w-8 md:h-8 md:top-2
                               rounded-full 
                               bg-[rgb(223,111,149)] hover:bg-[rgb(227,134,165)] hover:cursor-pointer'>
                <img src={searchIcon} alt="SearchIcon" className='w-4 h-4 md:w-6 md:h-6 mt-1' /></button>
        </div>
  )
}

export default SearchBar