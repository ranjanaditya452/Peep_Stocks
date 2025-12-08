import React from 'react'
import SearchBar from './microcomponents/SearchBar'
import DayTray from './microcomponents/DayTray'
import PopularTray from './microcomponents/PopularTray'

const TitleAreaL = () => {
  
  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-[12ch] '>
          Track it. Scroll it. Save it.</div>
        <div className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>The one platform to view all your stocks</div>
        <SearchBar/>
        <DayTray/>
        <PopularTray/>
      </div>

    </>
  )
}

export default TitleAreaL