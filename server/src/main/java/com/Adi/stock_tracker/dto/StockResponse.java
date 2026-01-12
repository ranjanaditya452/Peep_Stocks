package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record StockResponse(
        String symbol,
        double price,
        String lastUpdated,
        double closePrice,
        double change,
        String changePercent
) {}
