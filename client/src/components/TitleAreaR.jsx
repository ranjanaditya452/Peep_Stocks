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
    <div className='w-full h-full'>
    <div className=''><ChartData datastate={dataState}/>
     <button onClick={toggleData} className='bg-amber-500 h-10 w-25 mt-2 hover:cursor-pointer rounded-full absolute top-1 left-12'>Toggle Time</button>
    </div>
    <div>
      <ChartData datastate={dataState}/>
     <button onClick={toggleData} className='bg-amber-500 h-10 w-25 mt-2 hover:cursor-pointer rounded-full absolute top-1 left-12'>Toggle Time</button>
    </div>
     
   </div>
  )
}

export default TitleAreaR