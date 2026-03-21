package com.kushagrabhaskar.URLShortener.Controller;

import com.kushagrabhaskar.URLShortener.Dto.URLDto;
import com.kushagrabhaskar.URLShortener.Service.URLService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/URL")
public class URLController {

    @Autowired
    private URLService urlService;

    @GetMapping("/getAll")
    public ResponseEntity<List<URLDto>> getAllUrl(){
        return ResponseEntity.ok(urlService.getAllUrl());
    }

    @PostMapping("/create")
    public ResponseEntity<URLDto> createCustomShortUrl(@RequestBody URLDto url){
        return ResponseEntity.status(HttpStatus.OK).body(urlService.createCustomShortUrl(url.getShortURL(),url.getLongURL()));
    }

    @PostMapping("/shorten")
    public ResponseEntity<URLDto> createShortURL(@RequestBody URLDto url){
        return ResponseEntity.status(HttpStatus.OK).body(urlService.createShortURL(url.getLongURL()));
    }

    @PostMapping("/get")
    public ResponseEntity<URLDto> getURl(@RequestBody URLDto url){
        return ResponseEntity.ok(urlService.getURL(url.getLongURL()));
    }

    @GetMapping("/{shortCode}")
    public ResponseEntity<Void> redirect(@PathVariable String shortCode){

        String originalURL = urlService.getLongURL(shortCode);
        return ResponseEntity
                .status(HttpStatus.FOUND)
                .header("Location",originalURL)
                .build();
    }
}
