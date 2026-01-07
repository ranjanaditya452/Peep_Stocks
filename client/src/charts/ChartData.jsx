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

const ChartData = ({ dailyData, monthlyData, weeklyData, symbol }) => {
  const [data, setData] = useState([]);
  const [dataType, setDataType] = useState("Daily");

  useEffect(() => {
    if (dataType == "Monthly" && monthlyData) {
      setData([...monthlyData].reverse());
    }
    else if (dataType == "Weekly" && weeklyData) {
      setData([...weeklyData].reverse());
    }
    else if (dataType == "Daily" && dailyData) {
      setData([...dailyData].reverse());
    }
  }, [dailyData, monthlyData, weeklyData, dataType]);

  function toggleData() {
    if (dataType == "Monthly") {
      setDataType("Daily");
    }
    else if (dataType == "Weekly") {
      setDataType("Monthly");
    }
    else {
      setDataType("Weekly");
    }
  }
  const isCurrentViewLoading =
    (dataType === "Monthly" && !monthlyData) ||
    (dataType === "Weekly" && !weeklyData) ||
    (dataType === "Daily" && !dailyData);


  if (isCurrentViewLoading) {
    return (
      <div className='relative w-full h-64 flex flex-col items-center justify-center bg-gray-50 border rounded animate-pulse'>
        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-2"></div>
        <p className="text-gray-400 text-sm">Loading {dataType} Data...</p>

        <button onClick={toggleData} className='hover:bg-[#efefef] bg-white border-2 border-black text-xs h-6 w-20 hover:cursor-pointer rounded-full absolute top-6 left-12'>
          Toggle Time
        </button>
      </div>
    );
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