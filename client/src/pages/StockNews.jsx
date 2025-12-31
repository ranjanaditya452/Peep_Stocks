import React from 'react'
import CompanyHeader from '../components/CompanyHeader'
import NewsCard from '../components/microcomponents/NewsCard'

const StockNews = () => {
  return (
    <div className='flex flex-col gap-5
                    px-8 py-8 sm:px-16'>
    <CompanyHeader/>
    <h1 className='text-xl sm:text-2xl md:text-3xl'>NEWS</h1>
    <NewsArea/>
    </div>
  )
}

const NewsArea = () => {
  const items=[];
  for(let i=0;i<12;i++)
  {
      items.push(<NewsCard key={i+1}></NewsCard>)
  }
  return(
  <div className='grid grid-cols-1 gap-6
                  sm:grid-cols-2 lg:grid-cols-3'>
                {items}
  </div>
)}

export default StockNews