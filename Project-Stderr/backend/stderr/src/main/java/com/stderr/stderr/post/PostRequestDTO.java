package com.stderr.stderr.post;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PostRequestDTO {
    private String title;
    private String content;
    private String code;
    private Long categoryId;
    private List<String> tags;
}


