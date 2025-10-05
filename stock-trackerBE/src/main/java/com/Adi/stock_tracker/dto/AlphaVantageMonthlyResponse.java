package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public record AlphaVantageMonthlyResponse(

        @JsonProperty("Monthly Adjusted Time Series")
        Map<String,MonthlyStock> monthlySeries,
        @JsonProperty("Meta Data")
        MetaData metaData
) {
    public record MonthlyStock(
            @JsonProperty("1. open") String open,
            @JsonProperty("2. high") String high,
            @JsonProperty("3. low") String low,
            @JsonProperty("4. close") String close,
            @JsonProperty("5. volume") String volume
    ){}
    public record MetaData(

            @JsonProperty("2. Symbol") String symbol
    ){}
}
