package com.kushagrabhaskar.URLShortener.Service;

import com.kushagrabhaskar.URLShortener.Dto.URLDto;
import com.kushagrabhaskar.URLShortener.Entity.URL;
import com.kushagrabhaskar.URLShortener.Config.Mapper;
import com.kushagrabhaskar.URLShortener.Repository.URLRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class URLService {

    @Autowired
    private URLRepository urlRepository;
    @Autowired
    private Mapper mapper;

    boolean checkIfLongURLExists(String url){
        return urlRepository.existsByLongURL(url);
    }

    boolean checkIfShortURLExists(String url){
        return urlRepository.existsByShortURL(url);
    }


    @Cacheable(cacheNames = "url", key = "#url")
    public URLDto createShortURL(String url) {
        if(checkIfLongURLExists(url)){
            URL existingURL = urlRepository
                    .findByLongURL(url)
                    .orElseThrow(()->new RuntimeException("No data for the entered url!"));
            return mapper.EntityToOutputDto(existingURL);
        }
        String allowedChars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        StringBuilder createdShortURL = new StringBuilder("");
        do{
            createdShortURL = new StringBuilder("");
            for(int i=0;i<7;i++){
                int num = (int)Math.floor(Math.random()*62);
                createdShortURL.append(allowedChars.charAt(num));
            }
        }while(checkIfShortURLExists(createdShortURL.toString()));
        URL newURL = new URL();
        newURL.setLongURL(url);
        newURL.setShortURL(createdShortURL.toString());
        URL createdURL = urlRepository.save(newURL);
        return mapper.EntityToOutputDto(createdURL);
    }


    public URLDto getURL(String longURL){
        if(!checkIfLongURLExists(longURL)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"No URL Found!");
        }
        URL existingURL = urlRepository
                .findByLongURL(longURL)
                .orElseThrow(()->new RuntimeException("No data for the entered url!"));
        return mapper.EntityToOutputDto(existingURL);
    }

    public List<URLDto> getAllUrl() {
        List<URL> urls = urlRepository.findAll();

        return urls
                .stream()
                .map(url->mapper.EntityToOutputDto(url))
                .toList();
    }

    public URLDto createCustomShortUrl(String shortURL, String longURL) {
        if(checkIfShortURLExists(shortURL)){
            throw new ResponseStatusException(HttpStatus.CONFLICT,"Short URL Already Exists");
        }
        URL url = new URL();
        url.setShortURL(shortURL);
        url.setLongURL(longURL);
        URL newUrl = urlRepository.save(url);
        return mapper.EntityToOutputDto(newUrl);
    }

    public String getLongURL(String shortURL) {
        URL url = urlRepository.findByShortURL(shortURL).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Not Mapped to any Url"));
        return url.getLongURL();
    }
}
