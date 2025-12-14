import React from 'react'
import TitleAreaL from '../components/TitleAreaL'
import TitleAreaR from '../components/TitleAreaR'

const Homepage = () => {

  return (
    <>    
    <div className='grid gap-4 
                    lg:grid-cols-[4fr_5fr] 
                    2xl:grid-cols-1
                    px-8 py-8 md:px-16
                    outline-2 outline-red-200'>
      <TitleAreaL/>
      <TitleAreaR/>
    </div>
    </>
  )
}

export default Homepage