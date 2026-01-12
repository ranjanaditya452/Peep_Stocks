package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record CompanyOverviewResponse(

        String symbol,
        String assetType,
        String name,
        String description,
        String exchange,
        String currency,
        String country,
        String sector,
        String officialSite,
        double marketCap,
        double peRatio,
        double fiftyTwoWeekHigh,
        double fiftyTwoWeekLow

) {
}
