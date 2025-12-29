package com.Adi.stock_tracker.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public record NewsAPIResponse(
        @JsonProperty("data")
        Map<String,NewsData> newsArticle

) {
    public record NewsData
    (
            @JsonProperty("title")
            String newsTitle,
            @JsonProperty("description")
            String newsDescription,
            @JsonProperty("url")
            String newsURL,
            @JsonProperty("image_url")
            String newsImgURL
    ){}
}
