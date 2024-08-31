package com.stderr.stderr.post;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Setter
@Getter
@ToString
public class PostDTO {
    public String title;
    public String content;
    public Integer like;
    public Integer reply;
    public List<String> tags;

    public PostDTO(String a, String b, Integer c, Integer d, List<String> tag){  // constructor
        this.title = a;
        this.content = b;
        this.like = c;
        this.reply =d;
        this.tags = tag;
    }
}
