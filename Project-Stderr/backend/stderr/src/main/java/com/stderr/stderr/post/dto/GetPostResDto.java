package com.stderr.stderr.post.dto;

import com.stderr.stderr.tag.entity.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
public class GetPostResDto {
        private Long postId;
        private String title;
        private String content;
        private String code;
        private Integer likeCount;
        private Integer replyCount;
        private Set<Tag> tags;

}
