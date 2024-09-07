package com.stderr.stderr.user.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Entity
@Setter
@Getter
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;
    private String email;
    private String password;
    private String name;
    private String profile_image;
    private String description;
    private Integer like_total_count;
    private Integer reply_total_count;
    private Integer visiter_total_count;
    private Integer grade;
    private String git_address;
    private String tistory_address;
    private String user_web_address;



}
