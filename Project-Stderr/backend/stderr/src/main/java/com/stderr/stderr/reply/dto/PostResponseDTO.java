package com.stderr.stderr.reply.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class PostResponseDTO {
    private Long postId;
    private List<ReplyResponseDTO> reply;

//    public PostResponseDTO(Long postId) {
//        this.postId = postId;
//    }
}
