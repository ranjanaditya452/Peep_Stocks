package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record StockOverViewResponse(
        @JsonProperty("Symbol") String symbol,
        @JsonProperty("Name") String name,
        @JsonProperty("Description") String description,
        @JsonProperty("Sector") String sector,
        @JsonProperty("Industry") String industry,
        @JsonProperty("MarketCapitalization") String marketCap,
        @JsonProperty("PERatio") String peRatio,
        @JsonProperty("DividendYield") String divYield
) {
}
