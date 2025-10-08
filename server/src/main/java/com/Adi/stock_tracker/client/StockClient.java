package com.Adi.stock_tracker.client;

import com.Adi.stock_tracker.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class StockClient {


    private final WebClient webClient;


    @Value("${alpha.vantage.API.key}")
    private String vantageAPIKey;

    public AlphaVantageResponse getStockQuote(String stockSymbol) {

        return webClient.get().uri(uriBuilder -> uriBuilder
                        .queryParam("function","GLOBAL_QUOTE")
                .queryParam("symbol",stockSymbol)
                .queryParam("apikey",vantageAPIKey)
                .build())
                .retrieve()
                .bodyToMono(AlphaVantageResponse.class)
                .block();
    }

    public StockOverViewResponse getStockOverview(String stockSymbol)
    {
        return webClient.get().uri(uriBuilder -> uriBuilder
                .queryParam("function","OVERVIEW")
                .queryParam("symbol",stockSymbol)
                .queryParam("apikey",vantageAPIKey)
                .build())
                .retrieve()
                .bodyToMono(StockOverViewResponse.class)
                .block();
    }

    public AlphaVantageDailyResponse getDailyStock (String stockSymbol)
    {
        return webClient.get().uri(uriBuilder -> uriBuilder
                .queryParam("function","TIME_SERIES_DAILY")
                .queryParam("symbol",stockSymbol)
                .queryParam("apikey",vantageAPIKey)
                .build())
                .retrieve()
                .bodyToMono(AlphaVantageDailyResponse.class)
                .block();
    }

    public AlphaVantageWeeklyResponse getWeeklyStocks(String stockSymbol) {

        return webClient.get().uri(uriBuilder -> uriBuilder
                        .queryParam("function","TIME_SERIES_WEEKLY_ADJUSTED")
                        .queryParam("symbol",stockSymbol)
                        .queryParam("apikey",vantageAPIKey)
                        .build())
                        .retrieve()
                        .bodyToMono(AlphaVantageWeeklyResponse.class)
                        .block();

    }

    public AlphaVantageMonthlyResponse getMonthlyStocks(String stockSymbol) {

        return webClient.get().uri(uriBuilder -> uriBuilder
                .queryParam("function","TIME_SERIES_MONTHLY_ADJUSTED")
                .queryParam("symbol",stockSymbol)
                .queryParam("apikey",vantageAPIKey)
                .build())
                .retrieve()
                .bodyToMono((AlphaVantageMonthlyResponse.class)).block();

    }
}
