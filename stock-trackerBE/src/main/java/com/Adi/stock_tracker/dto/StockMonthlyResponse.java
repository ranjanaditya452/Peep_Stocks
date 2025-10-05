package com.Adi.stock_tracker.dto;

public record StockMonthlyResponse(


        String date,
        double open,
        double close,
        double high,
        double low
) {
}
