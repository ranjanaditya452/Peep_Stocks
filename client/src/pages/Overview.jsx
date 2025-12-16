import React, { useContext } from 'react'
import { OutlineContext } from '../context/OutlineContext'

const Overview = () => {
  return (
    <div className=' px-8 py-8 sm:px-16'>
      <OverviewMain/>    
    </div>
  )
}

const OverviewMain = () =>{
    
   
    const outlineClasses = useContext(OutlineContext);
     console.log(outlineClasses)
    return (
      <div className={` grid grid-cols-[auto_1fr] 
                        items-center gap-x-4 gap-y-2
                        sm:grid-rows-2`}>
        <div className='sm:row-span-full'>
          <img className={`w-10 sm:w-20 lg:w-36`} src="/aapl.png" alt="week" />
        </div>
        <div className=''>
          <div className='text-2xl sm:text-4xl lg:text-7xl'>Apple Inc</div>
        </div>
        <div className={`col-span-full sm:col-span-1`}>
          <div className='text-base md:text-2xl'>240.5 <span>-4.2</span> <span>-1.50%</span></div>
        </div>
      </div>
    )
}

export default Overview