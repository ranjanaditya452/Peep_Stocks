package com.Adi.stock_tracker.service;

import com.Adi.stock_tracker.client.NewsClient;
import com.Adi.stock_tracker.dto.NewsAPIResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    private NewsClient newsClient;

    @Autowired
    public NewsService(final NewsClient newsClient)
    {
        this.newsClient=newsClient;
    }

    public void getNewsArticles()
    {
        System.out.println(newsClient.getNewsArticles("AAPL"));
    }
}
