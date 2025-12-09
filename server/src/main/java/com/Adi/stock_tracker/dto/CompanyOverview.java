package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;

@Builder
public record CompanyOverview(

        @JsonProperty("Symbol")
        String symbol,
        @JsonProperty("AssetType")
        String assetType
) {
}
