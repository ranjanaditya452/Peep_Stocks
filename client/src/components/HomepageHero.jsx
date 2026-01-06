import React from 'react'
import SearchBar from './microcomponents/SearchBar'
import DayTray from './microcomponents/DayTray'
import PopularTray from './microcomponents/PopularTray'

const HomepageHero = () => {
  
  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className=' text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[12ch] '>
          Track it. Scroll it. Save it.</div>
        <div className='text-base sm:text-lg md:text-2xl xl:text-3xl'>The one platform to view all your stocks</div>
        <SearchBar/>
        <DayTray/>
        <PopularTray/>
      </div>

    </>
  )
}

export default HomepageHero