import React from 'react'
import { Line } from 'react-chartjs-2'

const StaticHome = ({chartData}) => {
  return (
    <Line data={chartData} options={{
                                    plugins: {
            title: {
              display: true,
              text: "IBM Stock Data Daily"
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