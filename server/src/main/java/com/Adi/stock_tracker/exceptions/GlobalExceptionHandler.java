package com.Adi.stock_tracker.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(FavoriteAlreadyExistsException.class)
    public ResponseEntity<String> handleAllFavAlreadyExistExceptions(FavoriteAlreadyExistsException fx)
    {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(fx.getMessage());
    }
}
