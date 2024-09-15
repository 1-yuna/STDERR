package com.stderr.stderr.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequestDTO {
    private String name;
    private String profileImage;
    private String description;
    private String gitAddress;
    private String tistoryAddress;
    private String userWebAddress;
}