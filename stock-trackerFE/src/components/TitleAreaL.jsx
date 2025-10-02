import React from 'react'
import SearchBar from './microcomponents/SearchBar'

const TitleAreaL = () => {
  
  return (
    <>
      <div className='flex flex-col gap-10'>
        <div className='text-8xl'>Track it. Scroll it. Save it.</div>
        <div className='text-3xl'>The one platform to view all your stocks</div>
        <SearchBar/>
      </div>

    </>
  )
}

export default TitleAreaL