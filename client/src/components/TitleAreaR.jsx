import React, { useState } from 'react'
import ChartData from '../charts/ChartData'

const TitleAreaR = () => {
  const [dataState,setDataState] = useState("Monthly");
  function toggleData()
  {
      if(dataState=="Monthly")
      {
        setDataState("Weekly");
      }
      else if (dataState=="Weekly")
      {
        setDataState("Daily");
      }
      else
      {
        setDataState("Monthly");
      }
  }
  return (
    <div >
    {/* <div className=''><ChartData datastate={dataState}/></div> */}
    <button onClick={toggleData} className='bg-amber-500 h-10 w-25 mt-2 hover:cursor-pointer rounded-full'>Toggle Time</button>
   </div>
  )
}

export default TitleAreaR