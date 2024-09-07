package com.stderr.stderr.user.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class JoinRequestDTO {
    private String username;
    private String email;
    private String password;
    private String name;
}
