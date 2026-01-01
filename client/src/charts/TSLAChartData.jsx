import React, { useState } from 'react'
import { TSLADaily } from '../data/TSLADailyStatic'
import { TSLAWeekly } from '../data/TSLAWeeklyStatic'
import { TSLAMonthly } from '../data/TSLAMontlyStatic'
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


const TSLAChartData = () => {
    const [data, setData] = useState([...TSLAMonthly].reverse());
    const [dataType, setDataType] = useState("Monthly");


    function toggleData() {
        if (dataType == "Monthly") {
            setData([...TSLAWeekly].reverse());
            setDataType("Weekly");
        }
        else if (dataType == "Weekly") {
            setData([...TSLADaily].reverse());
            setDataType("Daily");
        }
        else {
            setData([...TSLAMonthly].reverse());
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
                pointHoverRadius: 5
            }
        ]
    }
    return (

        <div className='relative w-full'>
            <RenderChart ticker={"TSLA"} chartData={dataVER} chartDataType={dataType} />
            <button onClick={toggleData} className='hover:bg-[#efefef] bg-white border-2 border-black text-xs h-6 w-20 hover:cursor-pointer rounded-full absolute top-6 left-12'>Toggle Time</button>
        </div>

    )
}


export default TSLAChartData