package com.Adi.stock_tracker.factory;


import lombok.Getter;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
public class NewsAPIQueryConfig {



    private final String language = "en";
    private final String filterEntities = "true";
    private final String mustHaveEntities = "true";
    private final String groupSimilar = "true";
    private final double minMatch = 2.0;
    private final String entityTypes ="equity";
    private final String sortOrder = "desc";
    private final String sortBasedOn = "entity_match_score";

    private final List<String> domains = List.of
            (
                    "reuters.com",
                    "bloomberg.com",
                    "wsj.com",
                    "ft.com",
                    "cnbc.com",
                    "finance.yahoo.com"
            );




}
