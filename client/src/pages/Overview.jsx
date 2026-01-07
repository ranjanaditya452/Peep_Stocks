import React, {useContext} from 'react'
import ChartData from '../charts/ChartData'
import CompanyHeader from '../components/CompanyHeader'
import StockContext from '../context/context-creation/StockContext';

const Overview = () => {
  const { dailyData, weeklyData, monthlyData, loading, error, symbol } = useContext(StockContext);

  if (error) return (<div className='flex items-center justify-center'>
    <p>Error : {error}</p>
  </div>);

  return (
    <div className='flex flex-col gap-5
                    px-8 py-8 sm:px-16'>
      <CompanyHeader/>
      <CardHeader />
      <FiftyTwoWeekHighLow />
      <DescriptionOverview />
      <ChartData dailyData={dailyData}
        weeklyData={weeklyData}
        monthlyData={monthlyData}
        symbol={symbol}
        isLoading={loading} />      
    </div>
  )
}


const CardHeader = () => {

  return (
    <div className='flex flex-col items-center gap-2
                    sm:items-start sm:flex-row
                    text-xl md:text-2xl'>
      <div className=''>
        <span>USA</span> • <span className='text-pink-400'>NASDAQ</span> • <span>USD</span>
      </div>
      <div className='flex items-center gap-4 ml-4 sm:ml-6'>
        <div className='flex flex-col gap-1 items-center sm:flex-row'>
          <h4>Market Cap</h4> <h4>$2.84T</h4>
        </div>
        <div className='flex flex-col gap-1 items-center sm:flex-row'>
          <h4>P/E Ratio</h4> <h4>28.4</h4>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}


const DescriptionOverview = () => {
  return (
    <div className="text-sm md:text-base leading-relaxed text-slate-600 ">
      <p>
        Apple Inc. is a global technology company designing and selling consumer
        electronics such as the iPhone, Mac, iPad, and Apple Watch.
        It also develops software and services including iOS, macOS, the App Store,
        iCloud, and Apple Music, and is known for its strong ecosystem and brand.
      </p>
    </div>

  )
}

const FiftyTwoWeekHighLow = () => {
    let current = 270;
    let percentage = (current - 209) / (324 - 209) * 100;
  return (
    <div className='space-y-2'>
      <div className='flex justify-between'>
        <span>Low 209.2</span>
        <span>High 324.9</span>
      </div>
      <div className='relative h-1  w-full bg-gray-200 rounded'>
        <div className='absolute h-3 w-1 bg-pink-400'
              style={{left: `${percentage}%`}}></div>
        <div className='absolute top-2'
             style={{left: `${percentage-1.5}%`}}>{current}</div>
      </div>
    </div>
  )
}

export default Overview