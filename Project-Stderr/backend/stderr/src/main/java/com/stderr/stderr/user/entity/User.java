package com.stderr.stderr.user.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.stderr.stderr.post.entity.Post;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="user_id")
    private Long userId;

    @Column(unique = true)
    private String userName;
    private String email;
    private String password;
    private String name;
    private String profileImage;
    private String description;
    private Integer likeTotalCount = 0;
    private Integer postTotalCount = 0;
    private Integer replyTotalCount = 0;
    private Integer visiterTotalCount = 0;
    private Integer grade;
    private String gitAddress;
    private String tistoryAddress;
    private String userWebAddress;

    @ToString.Exclude
    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Post> posts = new ArrayList<>();



}
