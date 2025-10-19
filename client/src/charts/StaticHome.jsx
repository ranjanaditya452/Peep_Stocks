import React from 'react'
import { Line } from 'react-chartjs-2'

const StaticHome = ({chartData,chartDataType}) => {
  return (
    <Line data={chartData} options={{
                                    plugins: {
            title: {
              display: true,
              text: `IBM Stock Data ${chartDataType}`
            },
            legend: {
              display: false
            }
          }
        }}
      />

  )
}

export default StaticHome