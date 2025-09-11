package com.Adi.stock_tracker.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Value("${alphaVantage.url}")
    private String alphaVantageUrl;

    @Bean
    public WebClient webClient(WebClient.Builder builder )
    {
            return builder.baseUrl(alphaVantageUrl).build();
    }
}
