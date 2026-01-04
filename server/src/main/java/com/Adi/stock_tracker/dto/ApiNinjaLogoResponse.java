package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public record ApiNinjaLogoResponse(
        @JsonProperty("name")
        String name,
        @JsonProperty("image")
        String image,
        @JsonProperty("ticker")
        String ticker
) {
}
