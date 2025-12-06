import React, { useEffect,useState } from 'react'
import { TSLADaily } from '../data/TSLADailyStatic'
import { TSLAWeekly } from '../data/TSLAWeeklyStatic'
import { TSLAMonthly } from '../data/TSLAMontlyStatic'


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
import StaticHome from './StaticHome';

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


const TSLAChartData = ({ datastate }) => {
    const [data, setData] = useState([...TSLAMonthly].reverse());
    const [dataType, setDataType] = useState("Monthly");
    useEffect(() => {
        if (datastate == "Monthly") {
            setData([...TSLAMonthly].reverse());
            setDataType("Monthly");
        }
        else if (datastate == "Weekly") {
            setData([...TSLAWeekly].reverse());
            setDataType("Weekly");
        }
        else {
            setData([...TSLADaily].reverse());
            setDataType("Daily");
        }
    }, [datastate]);

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
                pointRadius: window.innerWidth < 600 ? 0 : 3,
                pointHoverRadius: 5
            }
        ]
    }
    return (

        <StaticHome ticker={"TSLA"} chartData={dataVER} chartDataType={dataType} />
    )
}


export default TSLAChartData