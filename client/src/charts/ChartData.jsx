import React, { useEffect, useState } from 'react'
import RenderChart from './RenderChart'
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

const ChartData = ({dailyData,monthlyData,weeklyData,symbol,isLoading}) => {
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState("Daily");

  useEffect(()=>{
      if (dataType == "Monthly") {
      setData([...monthlyData].reverse());
    }
    else if (dataType == "Weekly") {
      setData([...weeklyData].reverse());
    }
    else {
      setData([...dailyData].reverse());
    }
  },[dailyData,monthlyData,weeklyData,dataType]);

  function toggleData() {
    if (dataType == "Monthly") {
      setDataType("Weekly");
    }
    else if (dataType == "Weekly") {
      setDataType("Daily");
    }
    else {
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
      <RenderChart ticker={`${symbol}`} chartData={dataVER} chartDataType={dataType} />
      <button onClick={toggleData} className='hover:bg-[#efefef] bg-white border-2 border-black text-xs h-6 w-20 hover:cursor-pointer rounded-full absolute top-6 left-12'>Toggle Time</button>
    </div>
  )
}

export default ChartData