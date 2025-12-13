import React from 'react'
import ChartData from '../charts/ChartData'
import TSLAChartData from '../charts/TSLAChartData';

const TitleAreaR = () => {

  return (
    <div className='w-full h-full min-w-0 overflow-hidden'>
      <ChartData/>
      <TSLAChartData/>    
   </div>
  )
}

export default TitleAreaR