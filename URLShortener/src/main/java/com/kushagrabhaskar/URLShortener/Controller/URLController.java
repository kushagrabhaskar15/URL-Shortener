package com.kushagrabhaskar.URLShortener.Controller;

import com.kushagrabhaskar.URLShortener.Dto.InputDto;
import com.kushagrabhaskar.URLShortener.Dto.OutputDto;
import com.kushagrabhaskar.URLShortener.Service.URLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/URL")
public class URLController {

    @Autowired
    private URLService urlService;

    @PostMapping("/shorten")
    public ResponseEntity<OutputDto> createShortURL(@RequestBody InputDto url){
        return ResponseEntity.status(HttpStatus.OK).body(urlService.createShortURL(url.getLongURL()));
    }

    @PostMapping("/get")
    public ResponseEntity<OutputDto> getURl(@RequestBody InputDto url){
        return ResponseEntity.ok(urlService.getURL(url.getLongURL()));
    }
}
