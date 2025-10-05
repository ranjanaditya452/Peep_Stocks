package com.Adi.stock_tracker.service;

import com.Adi.stock_tracker.client.StockClient;
import com.Adi.stock_tracker.dto.*;
import com.Adi.stock_tracker.entity.FavoriteStock;
import com.Adi.stock_tracker.exceptions.FavoriteAlreadyExistsException;
import com.Adi.stock_tracker.repository.FavoriteStockRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StockService {

    private StockClient stockClient;
    private FavoriteStockRepository favoriteStockRepository;

    @Autowired
    public StockService(final StockClient stockClient,
                        final FavoriteStockRepository favoriteStockRepository)
    {
        this.stockClient=stockClient;
        this.favoriteStockRepository=favoriteStockRepository;
    }

    //Single ticker info (StockResponse)
    @Cacheable(value = "stocks", key = "#stockSymbol")
    public StockResponse getStockFromSymbol(final String stockSymbol) {
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

    //Post method to add a stock symbol to favorite db
    @Transactional
    public FavoriteStock addFavorite(final String symbol) {
            if(favoriteStockRepository.existsBySymbol(symbol))
            {
                throw new FavoriteAlreadyExistsException(symbol);
            }
            FavoriteStock favoriteStock=FavoriteStock.builder()
                    .symbol(symbol).build();

            return favoriteStockRepository.save(favoriteStock);
    }

    //Returns stockresponse info as a list on every favorite stock
    public List<StockResponse> getEveryFavoriteStock() {
        List<String> allFavs= favoriteStockRepository.getFavoriteStocks();

        return allFavs.stream().map(stockSymbol->
        {
           return getStockFromSymbol(stockSymbol);
        }).collect(Collectors.toList());
    }

    public List<StockWeeklyResponse> getStockWeeklyService(String stockSymbol, int weeks) {
        final AlphaVantageWeeklyResponse alphaVantageWeeklyResponse = stockClient.getWeeklyStocks(stockSymbol);

        return alphaVantageWeeklyResponse.timesSeriesW().entrySet().stream().limit(weeks).map( weekly-> {
                    String date = weekly.getKey();
                    var data = weekly.getValue();

                    return new StockWeeklyResponse(
                            date,
                            Double.parseDouble(data.open()),
                            Double.parseDouble(data.close()),
                            Double.parseDouble(data.high()),
                            Double.parseDouble(data.low())
                    );
                }).collect(Collectors.toList());
    }
}
