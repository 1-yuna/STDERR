package com.stderr.stderr.Entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="post_id")
    private Long postId;

    private String title;
    private String content;
    private String code;
    private Integer likes;
    private Integer reply;

    @CreationTimestamp
    private LocalDateTime createdAt;  // 생성 날짜
    private LocalDateTime updatedAt;  // 업데이트 날짜

    @ManyToOne
    @JoinColumn(name="category_id", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Category category;

    @ManyToMany
    @JoinTable(name = "post_tag", joinColumns = @JoinColumn(name = "post_id"),
    inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private Set<Tag> tags = new HashSet<>();


}

