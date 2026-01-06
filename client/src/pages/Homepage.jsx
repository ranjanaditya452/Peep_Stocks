import React from 'react'
import HomepageHero from '../components/HomepageHero'
import HomepageCharts from '../components/HomepageCharts'

const Homepage = () => {

  return (
    <>    
    <div className='grid gap-4 
                    lg:grid-cols-[4fr_5fr] 
                    2xl:grid-cols-1
                    px-8 py-8 md:px-16'>
      <HomepageHero/>
      <HomepageCharts/>
    </div>
    </>
  )
}

export default Homepage