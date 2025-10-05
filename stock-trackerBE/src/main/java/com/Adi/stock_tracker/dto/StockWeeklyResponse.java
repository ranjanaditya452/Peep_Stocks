package com.Adi.stock_tracker.dto;

public record StockWeeklyResponse(
        String date,
        double open,
        double close,
        double high,
        double low
) {
}
