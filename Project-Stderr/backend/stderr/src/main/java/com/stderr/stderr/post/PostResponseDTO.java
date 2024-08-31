package com.stderr.stderr.post;

import com.stderr.stderr.tag.Tag;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;


@Getter
@Setter
@ToString
public class PostResponseDTO {
    private Long postId;
    private String title;
    private String content;
    private Integer likes;
    private Integer reply;
    private String code;
    private Set<Tag> tags;


    public PostResponseDTO(Long id, String title, String content,Integer likes, Integer reply, String code, Set<Tag> tags){  // constructor
        this.postId = id;
        this.title = title;
        this.content = content;
        this.likes = likes;
        this.reply = reply;
        this.code =code;
        this.tags = tags;
    }
}
