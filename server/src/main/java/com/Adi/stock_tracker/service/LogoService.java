package com.Adi.stock_tracker.service;

import com.Adi.stock_tracker.client.LogoClient;
import com.Adi.stock_tracker.dto.ApiNinjaLogoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogoService {

    private final LogoClient logoClient;

    @Autowired
    public LogoService (final LogoClient logoClient)
    {
        this.logoClient=logoClient;
    }

    public ApiNinjaLogoResponse getTickerLogo(String symbol)
    {
        return logoClient.getLogoFromApi(symbol);
    }
}
