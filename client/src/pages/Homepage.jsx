import React from 'react'
import TitleAreaL from '../components/TitleAreaL'
import TitleAreaR from '../components/TitleAreaR'

const Homepage = () => {

  return (
    <>    
    <div className='grid grid-cols-2 px-22 py-17 h-10000'>
      <TitleAreaL/>
      <TitleAreaR/>
    </div>
    </>
  )
}

export default Homepage