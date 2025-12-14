import React, { useContext } from 'react'
import { OutlineContext } from '../context/OutlineContext'

const Overview = () => {
  return (
    <div className=' px-8 py-8 md:px-16'>
      <OverviewMain/>    
    </div>
  )
}

const OverviewMain = () =>{
    let logo = "AAPL"
    console.log(logo)
    const outlineClasses = useContext(OutlineContext);
    return (
      <div className={`grid grid-cols-[auto_1fr]
                       md:grid-cols-[minmax(20px,140px)_1fr]
                       justify-items-start ${outlineClasses}`}>
        <div>
          <img className={`w-20 h-20 sm:w-35 sm:h-35`} src="/weekly.svg" alt="week" />
        </div>
        <div className='self-center text-3xl sm:text-5xl '>
          Apple Inc
        </div>
        <div className=''>
          <div className='text-3xl'>278.28</div>
          <div>{"+ 0.25"} {"+ 0.09"}</div>
        </div>
      </div>
    )
}

export default Overview