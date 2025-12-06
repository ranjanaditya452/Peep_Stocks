import React from 'react'
import { Line } from 'react-chartjs-2'

const StaticHome = ({ ticker,chartData, chartDataType }) => {
 const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      title: {
        display: true,
        text: `${ticker} Stock Data ${chartDataType}`,
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 8,
        right: 8,
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 4,        
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 5,        
        },
      },
    },
  }

      
  return (
    <div className='w-full h-64 sm:h-72 md:h-80'>
      <Line data={chartData} options={options}/>
    </div>

  )
}

export default StaticHome