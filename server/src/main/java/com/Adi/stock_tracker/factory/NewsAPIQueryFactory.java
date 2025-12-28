package com.Adi.stock_tracker.factory;

import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Getter
public class NewsAPIQueryFactory {


    private final List<String> requiredKeywords = List.of(
            "earnings", "revenue", "profit", "guidance",
            "merger", "acquisition", "lawsuit", "regulation", "SEC"
    );
    private final List<String> excludedKeywords = List.of(
            "review", "leak", "rumor", "hands-on", "launch"
    );
    private final List<String> domains = List.of
            (
                    "reuters.com",
                    "bloomberg.com",
                    "wsj.com",
                    "ft.com",
                    "cnbc.com",
                    "finance.yahoo.com"
            );

    private final String language = "en";
    private final String sortBy = "relevancy";
    private final int pageSize = 20;


}
