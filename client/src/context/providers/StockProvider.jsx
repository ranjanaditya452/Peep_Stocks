import React, { useEffect, useState } from 'react'
import { fetchDailyStocks, fetchMonthlyStocks, fetchWeeklyStocks } from '../../data-access/Querying';
import StockContext from '../context-creation/StockContext';
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const StockProvider = ({ children }) => {
  const [dailyData, setDailyData] = useState(null);
  const [weeklyData, setWeeklyData] = useState(null);
  const [monthlyData, setMonthlyData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [symbol, setSymbol] = useState("IBM");

  useEffect(() => {
    const fetchStockDataUniversal = async (symbol) => {
      try {

        setLoading(true);
        setError(null);

        const dailyFetchedData = await fetchDailyStocks(symbol);
        setDailyData(dailyFetchedData);
        await wait(700);

        const weeklyFetchedData = await fetchWeeklyStocks(symbol);
        setWeeklyData(weeklyFetchedData);
        await wait(700);

        const monthlyFetchedData = await fetchMonthlyStocks(symbol);
        setMonthlyData(monthlyFetchedData);
        await wait(700);

      }
      catch (err) {
        console.error(err);
        setError(err.message || "Failed to fetch stock data");
      }
      finally {
        setLoading(false);
      }
    };

    if (symbol) {
      fetchStockDataUniversal(symbol);
    }

  }, [symbol])

  const searchStock = (newSymbol) => {
    setSymbol(newSymbol);
  }




  return (
    <StockContext.Provider value={{ dailyData, weeklyData, monthlyData, loading, error, symbol, searchStock }}>
      {children}
    </StockContext.Provider>
  )
}

export default StockProvider