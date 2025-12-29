package com.Adi.stock_tracker.client;


import com.Adi.stock_tracker.dto.NewsAPIResponse;
import com.Adi.stock_tracker.factory.NewsAPIQueryConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.util.Collections;
import java.util.List;

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

    public List<NewsAPIResponse.NewsData> getNewsArticles(String symbol)
    {
        List<Integer> pages = List.of(1,2,3,4);
        String wantedDomains = String.join(",",newsAPIParameters.getDomains());
        return Flux.fromIterable(pages).flatMap(page->webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .queryParam("symbols",symbol)
                        .queryParam("language",newsAPIParameters.getLanguage())
                        .queryParam("filter_entities",newsAPIParameters.getFilterEntities())
                        .queryParam("must_have_entities",newsAPIParameters.getMustHaveEntities())
                        .queryParam("group_similar",newsAPIParameters.getGroupSimilar())
                        .queryParam("min_match_score",newsAPIParameters.getMinMatch())
                        .queryParam("entity_types",newsAPIParameters.getEntityTypes())
                        .queryParam("sort_order",newsAPIParameters.getSortOrder())
                        .queryParam("sort",newsAPIParameters.getSortBasedOn())
                        .queryParam("page",page)
                        .queryParam("domains",wantedDomains)
                        .build())
                .retrieve()
                .bodyToMono(NewsAPIResponse.class)
                .map(response->response.newsArticle().values())
                .onErrorReturn(Collections.emptyList()))
                .flatMap(Flux::fromIterable)
                .collectList().block();
    }

  }
