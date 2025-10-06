import React, { useState } from 'react'
import { dailyData } from '../data/DailyStatic'
import { monthlyStatic } from '../data/MonthlyStatic'
import { weeklyData } from '../data/WeeklyStatic'
import StaticHome from './StaticHome'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);


const ChartData = () => {
    const [data, setData] = useState(dailyData);

    let dataVER= {
        labels: data.map(elem=>elem.date),
        datasets:[
            {
                label:'Stock',
                data: data.map(elem=>elem.close),
                backgroundColor:[
                    "rgba(75,192,192,1)"
                ],
                borderColor:"red",
                borderWidth:2
            }
        ]
    }
    return (
  
        <StaticHome chartData={dataVER}/>
  )
}

export default ChartData