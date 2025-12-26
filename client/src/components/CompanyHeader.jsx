import React from 'react'

const CompanyHeader = () => {
  return (
    <div className='flex flex-col items-center gap-4
                    sm:grid sm:grid-cols-[auto_1fr]  sm:gap-x-4 sm:grid-rows-2'>
      <div className='sm:row-span-full'>
        <img className={`w-16 sm:w-20 lg:w-36`} src="/aapl.png" alt="week" />
      </div>
      <div className=''>
        <div className='text-3xl sm:text-4xl lg:text-7xl'>Apple Inc</div>
      </div>
      <div className={`col-span-full sm:pl-0 sm:col-span-1`}>
        <div className='text-base md:text-2xl'>240.5 <span>-4.2</span> <span>-1.50%</span></div>
      </div>
    </div>
  )
}

export default CompanyHeader

