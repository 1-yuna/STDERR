package com.stderr.stderr.user.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

@Getter
@Setter
@ToString
public class CustomUser implements UserDetails {
    private Long userId;
    private String username;
    private String password;
    private List<GrantedAuthority> authorities;

    public CustomUser(Long userId,String username, String password, List<GrantedAuthority> authorities) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }
}