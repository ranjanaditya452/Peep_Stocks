package com.Adi.stock_tracker.client;

import com.Adi.stock_tracker.dto.ApiNinjaLogoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class LogoClient {

    @Qualifier("logoWebClient")
    private final WebClient webClient;

    @Autowired
    public LogoClient(final WebClient webClient)
    {
        this.webClient=webClient;
    }

    public  ApiNinjaLogoResponse getLogoFromApi(String symbol)
    {
        return webClient.get().uri(uriBuilder -> uriBuilder.queryParam("logo",symbol)
                .build())
                .retrieve()
                .bodyToMono(ApiNinjaLogoResponse.class)
                .block();
    }
}
