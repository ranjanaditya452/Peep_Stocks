package com.Adi.stock_tracker.service;

import com.Adi.stock_tracker.client.StockClient;
import com.Adi.stock_tracker.dto.AlphaVantageCompanyOverviewResponse;
import com.Adi.stock_tracker.dto.AlphaVantageDailyResponse;
import com.Adi.stock_tracker.dto.AlphaVantageMonthlyResponse;
import com.Adi.stock_tracker.dto.AlphaVantageResponse;
import com.Adi.stock_tracker.dto.AlphaVantageWeeklyResponse;
import com.Adi.stock_tracker.dto.CompanyOverviewResponse;
import com.Adi.stock_tracker.dto.StockDailyResponse;
import com.Adi.stock_tracker.dto.StockMonthlyResponse;
import com.Adi.stock_tracker.dto.StockOverViewResponse;
import com.Adi.stock_tracker.dto.StockResponse;
import com.Adi.stock_tracker.dto.StockWeeklyResponse;
import com.Adi.stock_tracker.entity.FavoriteStock;
import com.Adi.stock_tracker.exceptions.FavoriteAlreadyExistsException;
import com.Adi.stock_tracker.repository.FavoriteStockRepository;
import com.Adi.stock_tracker.utility.SafeParser;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StockService {


    private final StockClient stockClient;
    private final FavoriteStockRepository favoriteStockRepository;

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

        if (alphaVantageDailyResponse.timesSeries() == null) {
            throw new IllegalStateException(
                    "Daily time series missing for symbol: " + stockSymbol
            );
        }

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
                            Double.parseDouble(daily.low())
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

        if (alphaVantageWeeklyResponse.timesSeriesW() == null) {
            throw new IllegalStateException(
                    "Weekly time series missing for symbol: " + stockSymbol
            );
        }

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

    public List<StockMonthlyResponse> getStockMonthlyService(String stockSymbol, int months) {
    AlphaVantageMonthlyResponse alphaVantageMonthlyResponse= stockClient.getMonthlyStocks(stockSymbol);

        if (alphaVantageMonthlyResponse.monthlySeries() == null) {
            throw new IllegalStateException(
                    "Monthly time series missing for symbol: " + stockSymbol
            );
        }

        return alphaVantageMonthlyResponse.monthlySeries().entrySet().stream().limit(months)
            .map(entry->
            {
                var date = entry.getKey();
                var data =entry.getValue();

                return new StockMonthlyResponse(
                        date,
                        Double.parseDouble(data.open()),
                        Double.parseDouble(data.close()),
                        Double.parseDouble(data.high()),
                        Double.parseDouble(data.low())
                );
            }).collect(Collectors.toList());

    }

    public CompanyOverviewResponse getCompanyOverview(String stockSymbol) {

            AlphaVantageCompanyOverviewResponse alphaVCompanyRes =
                    stockClient.getCompanyOverview(stockSymbol);

        return CompanyOverviewResponse.builder().symbol(alphaVCompanyRes.symbol())
                .assetType(alphaVCompanyRes.assetType())
                .name(alphaVCompanyRes.name())
                .description(alphaVCompanyRes.description())
                .exchange(alphaVCompanyRes.exchange())
                .currency(alphaVCompanyRes.currency())
                .country(alphaVCompanyRes.country())
                .sector(alphaVCompanyRes.sector())
                .officialSite(alphaVCompanyRes.officialSite())
                .marketCap(SafeParser.safeParseDouble(alphaVCompanyRes.marketCap()))
                .peRatio(SafeParser.safeParseDouble(alphaVCompanyRes.peRatio()))
                .fiftyTwoWeekHigh(SafeParser.safeParseDouble(alphaVCompanyRes.fiftyTwoWeekHigh()))
                .fiftyTwoWeekLow(SafeParser.safeParseDouble(alphaVCompanyRes.fiftyTwoWeekLow()))
                .build();

    }
}
