package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record AlphaVantageResponse(
        @JsonProperty("Global Quote")
        GlobalQuote globalQuote
) {

        public record GlobalQuote(
             @JsonProperty("01. symbol")
             String symbol,
             @JsonProperty("05. price")
             String price,
             @JsonProperty("07. latest trading day")
             String latestDay,
             @JsonProperty("08. previous close")
             String closePrice,
             @JsonProperty("09. change")
             String change,
             @JsonProperty("10. change percent")
             String changePercent

        ){}

}