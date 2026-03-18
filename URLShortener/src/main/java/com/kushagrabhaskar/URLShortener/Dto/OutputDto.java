package com.kushagrabhaskar.URLShortener.Dto;

import lombok.Data;

@Data
public class OutputDto {
    private Integer id;
    private String longURL;
    private String shortURL;
}
