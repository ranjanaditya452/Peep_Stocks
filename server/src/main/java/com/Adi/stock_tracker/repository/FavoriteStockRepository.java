package com.Adi.stock_tracker.repository;

import com.Adi.stock_tracker.entity.FavoriteStock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface FavoriteStockRepository extends JpaRepository<FavoriteStock,Long> {

    boolean existsBySymbol(String symbol);

    @Query(value = "SELECT symbol from favorite_stocks", nativeQuery = true)
    public List<String> getFavoriteStocks();
}
