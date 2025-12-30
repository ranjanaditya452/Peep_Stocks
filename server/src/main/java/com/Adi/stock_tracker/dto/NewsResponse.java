package com.Adi.stock_tracker.dto;


import lombok.Builder;

@Builder
public record NewsResponse(

        String newsTitle,
        String newsDescription,
        String newsURL,
        String newsImgURL
) {
}
