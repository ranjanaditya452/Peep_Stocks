package com.Adi.stock_tracker.dto;

import lombok.Builder;

@Builder
public record StockDailyResponse(
        String date,
        double open,
        double close,
        double high,
        double low
) {
}
