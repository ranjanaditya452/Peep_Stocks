import React, { useContext, useEffect, useState } from 'react'
import StockContext from '../context-creation/StockContext';
import { fetchStockStatus } from '../../data-access/StockQuerying';
import StockStatusContext from '../context-creation/StockStatusContext';

const StockStatusProvider = ({children}) => {
    const [stockStatus, setStockStatus] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { symbol } = useContext(StockContext);

    useEffect(() => {
        setLoading(true);
        if (symbol) {
            fetchStockStatus(symbol).then(setStockStatus).catch(
                err => setError(err.message));
        }
        setLoading(false);
    }, [symbol]);
    return (
        <StockStatusContext.Provider value={{stockStatus,loading,error}}>
            {children}
        </StockStatusContext.Provider>
        )
}

export default StockStatusProvider