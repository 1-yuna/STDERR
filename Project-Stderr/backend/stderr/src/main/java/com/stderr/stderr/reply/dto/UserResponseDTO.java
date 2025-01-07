package com.stderr.stderr.reply.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class UserResponseDTO {
    private Long userId;
    private String name;
    private String profileImage;

//    public UserResponseDTO(int userId, String name, String profileImage) {
//        this.userId = userId;
//        this.name = name;
//        this.profileImage = profileImage;
//    }
}
