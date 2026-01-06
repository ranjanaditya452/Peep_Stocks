import React, { useState } from 'react'
import { fetchDailyStocks, fetchMonthlyStocks, fetchWeeklyStocks } from '../../data-access/Querying';
import StockContext from '../context-creation/StockContext';

const StockProvider = ({ children }) => {
  const [dailyData, setDailyData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [monthlyData, setMonthlyData] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchStockDataUniversal = async (symbol) => {
    try {
      setLoading(true);
      const dailyFetchedData = await fetchDailyStocks(symbol);
      setDailyData(dailyFetchedData);

      const weeklyFetchedData = await fetchWeeklyStocks(symbol);
      setWeeklyData(weeklyFetchedData);

      const monthlyFetchedData = await fetchMonthlyStocks(symbol);
      setMonthlyData(monthlyFetchedData);
    }
    catch (err) {
      console.error(err);
    }
    finally {

      setLoading(false);
    }
  };


  return (
    <StockContext.Provider value={{ dailyData, weeklyData, monthlyData, fetchStockDataUniversal, loading }}>
      {children}
    </StockContext.Provider>
  )
}

export default StockProvider