package com.stderr.stderr.post.dto;

import com.stderr.stderr.tag.entity.Tag;
import lombok.*;

import java.util.Set;


public class PostResponse {

    @Getter
    @Setter
    @ToString
    @Builder
    @AllArgsConstructor
    public static class CreatePostResDTO {
        private Long postId;

    }
//    private Long postId;
//    private String title;
//    private String content;
//    private String code;
//    private Integer likes;
//    private Integer reply;
//    private Set<Tag> tags;
//
//
//    public PostResponse(Long id, String title, String content, String code, Integer likes, Integer reply, Set<Tag> tags){  // constructor
//        this.postId = id;
//        this.title = title;
//        this.content = content;
//        this.code =code;
//        this.likes = likes;
//        this.reply = reply;
//        this.tags = tags;
//    }
}
