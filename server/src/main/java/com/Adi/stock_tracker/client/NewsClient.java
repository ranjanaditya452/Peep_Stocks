package com.Adi.stock_tracker.client;

import com.Adi.stock_tracker.config.WebClientConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class NewsClient {

    private final WebClient webClient;

    @Autowired
    public NewsClient(@Qualifier("newsWebClient")WebClient webClient )
    {
        this.webClient=webClient;
    }

    @Value("${news.org.API.key=}")
    private String newsAPIKey;



}
