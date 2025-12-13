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
  const [data, setData] = useState([...monthlyStatic].reverse());
  const [dataType, setDataType] = useState("Monthly");

  function toggleData() {
    if (dataType == "Monthly") {
      setData([...weeklyData].reverse());
      setDataType("Weekly");
    }
    else if (dataType == "Weekly") {
      setData([...dailyData].reverse());
      setDataType("Daily");
    }
    else {
      setData([...monthlyStatic].reverse());
      setDataType("Monthly");
    }
  }

  let dataVER = {
    labels: data.map(elem => elem.date),
    datasets: [
      {
        label: 'Stock',
        data: data.map(elem => elem.close),
        backgroundColor: [
          "rgba(75,192,192,1)"
        ],
        borderColor: "red",
        borderWidth: 2,
        pointRadius: (context) => {
          const chartWidth = context.chart.width;
          return chartWidth < 600 ? 0 : 3;
        },
      }
    ]
  }
  return (
    <div className='relative w-full'>
      <StaticHome ticker={"IBM"} chartData={dataVER} chartDataType={dataType} />
      <button onClick={toggleData} className='hover:bg-[#efefef] bg-white border-2 border-black text-xs h-6 w-20 hover:cursor-pointer rounded-full absolute top-6 left-12'>Toggle Time</button>
    </div>
  )
}

export default ChartData