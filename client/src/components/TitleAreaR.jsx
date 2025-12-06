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
    <div className='relative'>
      <ChartData datastate={dataState}/>
      <button onClick={toggleData} className='hover:bg-[#efefef] bg-white border-2 border-black text-xs h-6 w-20 hover:cursor-pointer rounded-full absolute top-8 left-12'>Toggle Time</button>
    </div>
    <div className='relative'>
      <ChartData datastate={dataState}/>
      <button onClick={toggleData} className='hover:bg-[#efefef] bg-white border-2 border-black text-xs h-6 w-20 hover:cursor-pointer rounded-full absolute top-8 left-12'>Toggle Time</button>
    </div>
     
   </div>
  )
}

export default TitleAreaR