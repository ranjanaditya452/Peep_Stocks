import React from 'react'
import CompanyHeader from '../components/CompanyHeader'

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
  <div className='grid grid-cols-1
                  sm:grid-cols-2 lg:grid-cols-3'>
    
  </div>
}

export default StockNews