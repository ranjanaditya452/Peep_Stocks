import React, { useContext } from 'react'
import { OutlineContext } from '../context/OutlineContext'
import SearchBar from '../components/microcomponents/SearchBar'
import ChartData from '../charts/ChartData'

const Overview = () => {
  return (
    <div className='flex flex-col gap-5
                    px-8 py-8 sm:px-16'>
      <OverviewMain />
      <div className='min-[500px]:w-3/4'><SearchBar /></div>
      <DescriptionOverview/>
      <ChartData/>
    </div>
  )
}

const OverviewMain = () => {
  const outlineClasses = useContext(OutlineContext);
  console.log(outlineClasses)
  return (

    <div className={` grid grid-cols-[auto_1fr] 
                        items-center gap-x-4 
                        sm:grid-rows-2`}>
      <div className='sm:row-span-full'>
        <img className={`w-10 sm:w-20 lg:w-36`} src="/aapl.png" alt="week" />
      </div>
      <div className=''>
        <div className='text-2xl sm:text-4xl lg:text-7xl'>Apple Inc</div>
      </div>
      <div className={`col-span-full pl-6 sm:pl-0 sm:col-span-1`}>
        <div className='text-base md:text-2xl'>240.5 <span>-4.2</span> <span>-1.50%</span></div>
      </div>
    </div>
  )
}

const DescriptionOverview = ()=>{
  return(
        <div className='text-sm md:text-base'>
          Apple Inc. is a global tech giant designing & selling consumer electronics (iPhone, Mac, iPad, Watch), software (iOS, macOS), and online services (App Store, iCloud, Apple Music), known for innovation, seamless ecosystem integration, and strong brand.
        </div>
  )
}

export default Overview