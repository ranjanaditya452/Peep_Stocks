package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public record AlphaVantageWeeklyResponse(
        @JsonProperty("Weekly Adjusted Time Series")
        Map<String, WeeklyPrice> timesSeriesW,
        @JsonProperty("Meta Data")
        MetaData metaData

) {
    public record WeeklyPrice(
            @JsonProperty("1. open") String open,
            @JsonProperty("2. high") String high,
            @JsonProperty("3. low") String low,
            @JsonProperty("4. close") String close
    ){}
    public record MetaData(
      @JsonProperty("2. Symbol")
      String symbol
    ){}


}
