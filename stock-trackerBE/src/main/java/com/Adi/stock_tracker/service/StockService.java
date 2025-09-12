package com.Adi.stock_tracker.service;

import com.Adi.stock_tracker.client.StockClient;
import com.Adi.stock_tracker.dto.AlphaVantageResponse;
import com.Adi.stock_tracker.dto.StockOverViewResponse;
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

    public StockResponse getStockFormSymbol(final String stockSymbol) {
        final AlphaVantageResponse alphaVantageResponse = stockClient.getStockQuote(stockSymbol);

        return StockResponse.builder()
                .symbol(alphaVantageResponse.globalQuote().symbol())
                .price(Double.parseDouble(alphaVantageResponse.globalQuote().price()))
                .lastUpdated(alphaVantageResponse.globalQuote().latestDay())
                .build();
    }

    public StockOverViewResponse getStockOverview(final String stockSymbol) {

    return stockClient.getStockOverview(stockSymbol);
    }
}
