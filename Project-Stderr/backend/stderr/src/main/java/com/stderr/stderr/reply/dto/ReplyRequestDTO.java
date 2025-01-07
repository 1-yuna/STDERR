package com.stderr.stderr.reply.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class ReplyRequestDTO {
    private String code;
    private String content;
}
