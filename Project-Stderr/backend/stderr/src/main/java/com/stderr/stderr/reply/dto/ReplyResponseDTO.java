package com.stderr.stderr.reply.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class ReplyResponseDTO {
    private Long replyId;
    private String content;
    private String code;
    private Integer likes;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private UserResponseDTO user;

//    public ReplyResponseDTO(Long replyId, String content, String code, Integer likes, LocalDateTime createdAt, LocalDateTime updatedAt) {
//        this.replyId = replyId;
//        this.content = content;
//        this.code = code;
//        this.likes = likes;
//        this.createdAt = createdAt;
//        this.updatedAt = updatedAt;
//    }
}
