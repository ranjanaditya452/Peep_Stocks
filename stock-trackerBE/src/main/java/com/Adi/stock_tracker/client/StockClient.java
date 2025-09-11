package com.Adi.stock_tracker.client;

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

        return webClient.get().uri(uriBuilder -> uriBuilder.queryParam())
    }
}
