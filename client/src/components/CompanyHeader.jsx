import React, { useContext, useEffect, useState } from 'react'
import StockStatusContext from '../context/context-creation/StockStatusContext'
import { fetchStockLogo } from '../data-access/StockQuerying';

const CompanyHeader = ({name}) => {
  const {stockStatus} = useContext(StockStatusContext);
  
  const[logoData,setLogoData] = useState(null);
  const[error,setError] = useState(null);
  const symbolStock = stockStatus?.symbol;
  

  useEffect(()=>{

    if (!symbolStock) return;
    setError(null); 
    setLogoData(null);
       fetchStockLogo(symbolStock)
       .then(setLogoData)
       .catch(err => setError(err.message));
    },[symbolStock]);

    if (!stockStatus) return null;

    return (
    <div className='flex flex-col items-center gap-4
                    sm:grid sm:grid-cols-[auto_1fr]  sm:gap-x-4 sm:grid-rows-2'>
      <div className='sm:row-span-full'>
        {error ? <p>{error}</p> : logoData ?
        ( <img className={`w-16 sm:w-20 lg:w-36`} 
              src={logoData?.image} 
              alt={stockStatus?.symbol ?? "Stock Image"} /> )
          : ( <img className={`w-16 sm:w-20 lg:w-36`} 
                   src="/circle_placeholder.svg" 
                   alt= {"Stock Image"} /> )} 
      </div>
      <div>
        <div className='text-3xl sm:text-4xl lg:text-7xl'>{name ?? logoData?.name ?? stockStatus?.symbol}</div>
      </div>
      <div className={`col-span-full sm:pl-0 sm:col-span-1`}>
        <div className='text-base md:text-2xl'>{stockStatus?.price} <span>{stockStatus?.change}</span> <span>{stockStatus?.changePercent}</span></div>
      </div>
    </div>
  )
}

export default CompanyHeader

