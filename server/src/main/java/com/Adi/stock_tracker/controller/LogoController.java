package com.Adi.stock_tracker.controller;

import com.Adi.stock_tracker.dto.ApiNinjaLogoResponse;
import com.Adi.stock_tracker.service.LogoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/logo")
public class LogoController {

    private final LogoService logoService;

    public LogoController(LogoService logoService) {
        this.logoService = logoService;
    }


    @GetMapping("/{symbol}")
    public ApiNinjaLogoResponse getTickerImage(@PathVariable String symbol)
    {
        return logoService.getTickerLogo(symbol);
    }
}
