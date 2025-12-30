package com.Adi.stock_tracker.controller;

import com.Adi.stock_tracker.service.NewsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/v1/news")
public class NewsController {

    private NewsService newsService;

    public NewsController(final NewsService newsService)
    {
        this.newsService=newsService;
    }

    @GetMapping("/news")
    public void getNewsStocks()
    {
        newsService.getNewsArticles();
    }
}
