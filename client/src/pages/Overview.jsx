import React from 'react'

const Overview = () => {
  return (
    <div>
      <OverviewMain/>    
    </div>
  )
}

const OverviewMain = () =>{
    let logo = "AAPL"

    return (
      <div>
        <><img src="/intraday.svg" alt="" />{logo}</>
        <>
          AAPL
        </>
      </div>
    )
}

export default Overview