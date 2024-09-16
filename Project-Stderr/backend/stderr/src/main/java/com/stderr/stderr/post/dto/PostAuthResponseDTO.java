package com.stderr.stderr.post.dto;

import com.stderr.stderr.post.entity.Post;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostAuthResponseDTO {
    private boolean isAuthor;
    private Post post;

    public PostAuthResponseDTO(boolean isAuthor, Post post) {
        this.isAuthor = isAuthor;
        this.post = post;
    }
}
