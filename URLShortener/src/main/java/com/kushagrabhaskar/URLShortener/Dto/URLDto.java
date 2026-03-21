package com.kushagrabhaskar.URLShortener.Dto;

import lombok.Data;

@Data
public class URLDto {
    private Integer id;
    private String longURL;
    private String shortURL;
}
