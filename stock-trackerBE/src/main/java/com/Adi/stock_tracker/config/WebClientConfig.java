package com.Adi.stock_tracker.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Value("${alphaVantage.url}")
    private String alphaVantageUrl;

    @Bean
    public WebClient webClient(WebClient.Builder builder )
    {
            return builder.baseUrl(alphaVantageUrl) .exchangeStrategies(ExchangeStrategies.builder()
                            .codecs(configurer -> configurer
                                    .defaultCodecs()
                                    .maxInMemorySize(16 * 1024 * 1024))
                            .build())
                    .build();
    }
}
