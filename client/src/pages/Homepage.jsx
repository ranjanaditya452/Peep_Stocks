import React from 'react'
import TitleAreaL from '../components/TitleAreaL'
import TitleAreaR from '../components/TitleAreaR'

const Homepage = () => {

  return (
    <>    
    <div className='grid gap-2 lg:grid-cols-[4fr_5fr] px-18 py-8 outline-2 outline-red-200'>
      <TitleAreaL/>
      <TitleAreaR/>
    </div>
    </>
  )
}

export default Homepage