package com.stderr.stderr.user.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(unique = true)
    private String username;
    private String email;
    private String password;
    private String name;
    private String profileImage;
    private String description;
    private Integer likeTotalCount;
    private Integer postTotalCount;
    private Integer replyTotalCount;
    private Integer visiterTotalCount;
    private Integer grade;
    private String gitAddress;
    private String tistoryAddress;
    private String userWebAddress;


}
