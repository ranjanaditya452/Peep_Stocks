package com.Adi.stock_tracker.service;

import com.Adi.stock_tracker.client.NewsClient;
import com.Adi.stock_tracker.dto.NewsAPIResponse;
import com.Adi.stock_tracker.dto.NewsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsService {

    private final NewsClient newsClient;

    @Autowired
    public NewsService(final NewsClient newsClient)
    {
        this.newsClient=newsClient;
    }

    public List<NewsResponse> getNewsArticles(String symbol) {

        List<NewsAPIResponse> apiResponse= newsClient.getNewsArticles(symbol);
         return apiResponse.stream().flatMap(response->response.newsArticles().stream())
                 .map(response->{
                     return new NewsResponse(response.newsTitle(), response.newsDescription(), response.newsURL(), response.newsImgURL());
                 }).collect(Collectors.toList());
    }
    }
