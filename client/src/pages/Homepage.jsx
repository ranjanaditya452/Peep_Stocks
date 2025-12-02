import React from 'react'
import TitleAreaL from '../components/TitleAreaL'
import TitleAreaR from '../components/TitleAreaR'

const Homepage = () => {

  return (
    <>    
    <div className='grid md:grid-cols-2 px-18 py-16'>
      <TitleAreaL/>
      <TitleAreaR/>
    </div>
    </>
  )
}

export default Homepage