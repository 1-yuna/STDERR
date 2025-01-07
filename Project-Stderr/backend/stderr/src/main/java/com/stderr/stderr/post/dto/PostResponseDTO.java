package com.stderr.stderr.post.dto;

import com.stderr.stderr.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class PostResponseDTO {
    private Long postId;
    private String title;
    private String content;
    private String code;
    private Integer likes;
    private Integer replyCount;
    private Set<Tag> tags;


//    public PostResponseDTO(Long id, String title, String content, String code, Integer likes, Integer reply, Set<Tag> tags){  // constructor
//        this.postId = id;
//        this.title = title;
//        this.content = content;
//        this.code = code;
//        this.likes = likes;
//        this.reply = reply;
//        this.tags = tags;
//    }
}
