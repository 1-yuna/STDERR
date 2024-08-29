package com.stderr.stderr.board;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Setter
@Getter
@ToString
public class BoardDTO {
    public String title;
    public String content;
    public Integer like;
    public Integer reply;
    public List<String> tag;

    public BoardDTO(String a, String b, Integer c, Integer d, List<String> tag){  // constructor
        this.title = a;
        this.content = b;
        this.like = c;
        this.reply =d;
        this.tag = tag;
    }
}
