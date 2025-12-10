package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record AlphaVantageCompanyOverviewResponse(

        @JsonProperty("Symbol")
        String symbol,
        @JsonProperty("AssetType")
        String assetType,
        @JsonProperty("Name")
        String name,
        @JsonProperty("Description")
        String description,
        @JsonProperty("Exchange")
        String exchange,
        @JsonProperty("Currency")
        String currency,
        @JsonProperty("Country")
        String country,
        @JsonProperty("Sector")
        String sector,
        @JsonProperty("OfficialSite")
        String officialSite,
        @JsonProperty("MarketCapitalization")
        Long marketCap,
        @JsonProperty("PERatio")
        Long peRatio,
        @JsonProperty("52WeekHigh")
        Long fiftyTwoWeekHigh,
        @JsonProperty("52WeekLow")
        Long fiftyTwoWeekLow

        ) {
}

