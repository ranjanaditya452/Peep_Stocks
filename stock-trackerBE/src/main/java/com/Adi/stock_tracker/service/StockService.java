package com.Adi.stock_tracker.service;

import com.Adi.stock_tracker.client.StockClient;
import com.Adi.stock_tracker.dto.StockResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    private StockClient stockClient;

    @Autowired
    public StockService(final StockClient stockClient)
    {
        this.stockClient=stockClient;
    }

    public StockResponse getStockFormSymbol(String stockSymbol) {
        stockClient.getStockQuote(stockSymbol);

        return new StockResponse();
    }
}
