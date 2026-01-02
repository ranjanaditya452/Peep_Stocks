package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public record AlphaVantageDailyResponse(

        @JsonProperty("Time Series (Daily)")
        Map<String,DailyPrice> timesSeries,
        @JsonProperty("Meta Data")
        MetaData metaData

) {
    public record DailyPrice
    (
        @JsonProperty("1. open")
        String open,
        @JsonProperty("2. high")
        String high,
        @JsonProperty("3. low")
        String low,
        @JsonProperty("4. close")
        String close,
        @JsonProperty("6. volume")
        String volume
    )    {}

    public record MetaData(
            @JsonProperty("2. Symbol")
            String symbol
    )
    {}
}
