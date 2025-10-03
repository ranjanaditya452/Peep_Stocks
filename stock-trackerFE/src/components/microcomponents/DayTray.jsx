import React, { useContext } from 'react'
import { OutlineContext } from '../../context/OutlineContext'

const DayTray = () => {
    const outline = useContext(OutlineContext);
    let buttonStyle ="flex items-center gap-2 px-3 py-2 rounded-full h-13 hover:cursor-pointer";
  return (
    <div className={`${outline} flex justify-between text-2xl w-3/4`} >
        <button className={`${buttonStyle} bg-[rgb(33,32,32)]`}>
            <img className="w-7 h-7" src="/intraday.svg" alt="day" />Intraday
        </button>
        <button className={`${buttonStyle}`}>
            <img className="w-7 h-7" src="/weekly.svg" alt="week" />Weekly
        </button>
        <button className={`${buttonStyle}`}>
            <img className="w-7 h-7" src="/monthly.svg" alt="month" />Monthly
        </button>
    </div>
  )
}

export default DayTray