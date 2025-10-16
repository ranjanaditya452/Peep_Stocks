package com.Adi.stock_tracker.controller;



import com.Adi.stock_tracker.dto.FavoriteStockRequest;
import com.Adi.stock_tracker.dto.StockDailyResponse;
import com.Adi.stock_tracker.dto.StockOverViewResponse;
import com.Adi.stock_tracker.dto.StockResponse;
import com.Adi.stock_tracker.entity.FavoriteStock;
import com.Adi.stock_tracker.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/stocks")
@RestController
public class StockController {

    private final StockService stockService;

    @Autowired
    public StockController(StockService stockService)
    {
        this.stockService=stockService;
    }

    @GetMapping("/{stockSymbol}")
    public StockResponse getStock(@PathVariable String stockSymbol)
    {
        return stockService.getStockFromSymbol(stockSymbol.toUpperCase());
    }

    @GetMapping("/{stockSymbol}/overview")
    public StockOverViewResponse getStockOverview(@PathVariable String stockSymbol)
    {
        return stockService.getStockOverview(stockSymbol.toUpperCase());
    }

    @GetMapping("/{stockSymbol}/daily")
    public List<StockDailyResponse> getStockDaily(@PathVariable String stockSymbol, @RequestParam(defaultValue = "30") int days)
    {
        return stockService.getStockDaily(stockSymbol.toUpperCase(),days);
    }

    @GetMapping("/{stockSymbol}/weekly")
    public List<StockWeeklyResponse> getStockWeekly(@PathVariable String stockSymbol, @RequestParam(defaultValue = "30")int weeks )
    {
        return stockService.getStockWeeklyService(stockSymbol.toUpperCase(),weeks);
    }

    @GetMapping("/{stockSymbol}/monthly")
    public List<StockMonthlyResponse> getStocksMonthly(@PathVariable String stockSymbol, @RequestParam(defaultValue = "36")int months)
    {
        return stockService.getStockMonthlyService(stockSymbol.toUpperCase(),months);
    }

    @PostMapping("/favorites")
    public ResponseEntity<FavoriteStock> saveFavoriteStock(@RequestBody FavoriteStockRequest request)
    {
        final FavoriteStock favoriteStock = stockService.addFavorite(request.getSymbol());
        return ResponseEntity.ok(favoriteStock);
    }

    @GetMapping("/favorites")
    public ResponseEntity<List<StockResponse>> getAllFavStocks()
    {
        final List<StockResponse> list = stockService.getEveryFavoriteStock();
        return ResponseEntity.ok(list);
    }
}
