import React, { useEffect, useState } from 'react'
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


const ChartData = ({datastate}) => {
    const [data, setData] = useState([...monthlyStatic].reverse());
    const [dataType, setDataType] = useState("Monthly");
    useEffect(()=>{
        if(datastate=="Monthly")
      {
        setData([...monthlyStatic].reverse());
        setDataType("Monthly");
      }
      else if (datastate=="Weekly")
      {
       setData([...weeklyData].reverse());
       setDataType("Weekly");
      }
      else
      {
        setData([...dailyData].reverse());
        setDataType("Daily");
      }
    },[datastate]);
   
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
  
        <StaticHome chartData={dataVER} chartDataType={dataType}/>
  )
}

export default ChartData