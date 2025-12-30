package com.Adi.stock_tracker.controller;

import com.Adi.stock_tracker.dto.NewsAPIResponse;
import com.Adi.stock_tracker.dto.NewsResponse;
import com.Adi.stock_tracker.service.NewsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/news")
public class NewsController {

    private final NewsService newsService;

    public NewsController(final NewsService newsService)
    {
        this.newsService=newsService;
    }

    @GetMapping("/latestNews")
    public List<NewsResponse> getNewsStocks(@RequestParam String symbol)
    {
        return newsService.getNewsArticles(symbol);
    }
}
