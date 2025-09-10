package com.Adi.stock_tracker.client;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@RequiredArgsConstructor
public class StockClient {


    private final WebClient webClient;

    public void getStockQuote(String stockSymbol) {
    }
}
