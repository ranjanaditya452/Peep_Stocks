package com.Adi.stock_tracker.service;

import com.Adi.stock_tracker.client.StockClient;
import com.Adi.stock_tracker.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StockService {

    private StockClient stockClient;

    @Autowired
    public StockService(final StockClient stockClient)
    {
        this.stockClient=stockClient;
    }

    //Single ticker info
    public StockResponse getStockFrommSymbol(final String stockSymbol) {
        final AlphaVantageResponse alphaVantageResponse = stockClient.getStockQuote(stockSymbol);

        return StockResponse.builder()
                .symbol(alphaVantageResponse.globalQuote().symbol())
                .price(Double.parseDouble(alphaVantageResponse.globalQuote().price()))
                .lastUpdated(alphaVantageResponse.globalQuote().latestDay())
                .build();
    }

    //Overview
    public StockOverViewResponse getStockOverview(final String stockSymbol) {

    return stockClient.getStockOverview(stockSymbol);
    }

    //List of daily trading data
    public List<StockDailyResponse> getStockDaily(String stockSymbol, int days) {
        final AlphaVantageDailyResponse alphaVantageDailyResponse =stockClient.getDailyStock(stockSymbol);

        return alphaVantageDailyResponse.timesSeries().entrySet().stream()
                .limit(days)
                .map(entry->
                {
                    var date = entry.getKey();
                    var daily = entry.getValue();
                    return new StockDailyResponse(
                            date,
                            Double.parseDouble(daily.open()),
                            Double.parseDouble(daily.close()),
                            Double.parseDouble(daily.high()),
                            Double.parseDouble(daily.low()),
                            Long.parseLong(daily.volume())
                    );
                })
                .collect(Collectors.toList());
    }
}
