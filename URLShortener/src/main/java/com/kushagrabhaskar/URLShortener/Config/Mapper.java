package com.kushagrabhaskar.URLShortener.Config;

import com.kushagrabhaskar.URLShortener.Dto.OutputDto;
import com.kushagrabhaskar.URLShortener.Entity.URL;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

    public OutputDto EntityToOutputDto(URL url){
        OutputDto outputDto = new OutputDto();
        outputDto.setId(url.getId());
        outputDto.setLongURL(url.getLongURL());
        outputDto.setShortURL(url.getShortURL());
        return outputDto;
    }
}
