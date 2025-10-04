import React from 'react'
import SearchBar from './microcomponents/SearchBar'
import DayTray from './microcomponents/DayTray'
import PopularTray from './microcomponents/PopularTray'

const TitleAreaL = () => {
  
  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className='text-8xl w-[10ch]'>Track it. Scroll it. Save it.</div>
        <div className='text-3xl'>The one platform to view all your stocks</div>
        <SearchBar/>
        <DayTray/>
        <PopularTray/>
      </div>

    </>
  )
}

export default TitleAreaL