package com.Adi.stock_tracker.exceptions;

public class FavoriteAlreadyExistsException extends  RuntimeException{

    public FavoriteAlreadyExistsException(String symbol){
        super("Symbol already exists as favorite : "+ symbol);
    }
}
