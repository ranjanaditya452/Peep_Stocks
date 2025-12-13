import React from 'react'

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

    return (
      <div className='flex'>
        <div>
          <img className="w-40 h-40" src="/weekly.svg" alt="week" />
        </div>
        <div>
          AAPL
        </div>
      </div>
    )
}

export default Overview