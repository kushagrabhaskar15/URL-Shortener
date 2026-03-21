package com.kushagrabhaskar.URLShortener.Config;

import com.kushagrabhaskar.URLShortener.Dto.URLDto;
import com.kushagrabhaskar.URLShortener.Entity.URL;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    public URLDto EntityToOutputDto(URL url){
        URLDto outputDto = new URLDto();
        outputDto.setId(url.getId());
        outputDto.setLongURL(url.getLongURL());
        outputDto.setShortURL(url.getShortURL());
        return outputDto;
    }
}
