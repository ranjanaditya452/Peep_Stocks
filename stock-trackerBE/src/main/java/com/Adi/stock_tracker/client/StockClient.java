package com.Adi.stock_tracker.client;

import com.Adi.stock_tracker.dto.AlphaVantageResponse;
import com.Adi.stock_tracker.dto.StockOverViewResponse;
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
}
