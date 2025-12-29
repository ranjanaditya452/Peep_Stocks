package com.Adi.stock_tracker.client;


import com.Adi.stock_tracker.factory.NewsAPIQueryConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class NewsClient {

    private final NewsAPIQueryConfig newsAPIParameters;
    private final WebClient webClient;

    @Autowired
    public NewsClient(@Qualifier("newsWebClient")WebClient webClient,
                      NewsAPIQueryConfig newsAPIParameters)
    {
        this.webClient=webClient;
        this.newsAPIParameters=newsAPIParameters;
    }

    @Value("${news.org.API.key}")
    private String newsAPIKey;





}
