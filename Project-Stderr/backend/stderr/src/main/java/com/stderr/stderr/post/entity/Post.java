package com.stderr.stderr.post.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.stderr.stderr.tag.entity.Tag;
import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.user.entity.User;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="post_id")
    private Long postId;

    private String title;
    private String content;
    private String code;
    private int likeCount;
    private int replyCount;

    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name="category_id", foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
    private Category category;

    @ManyToOne
    @JoinColumn(name="user_id", foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
    private User user;

    @ManyToMany
    @JoinTable(name = "post_tag", joinColumns = @JoinColumn(name = "post_id"),
    inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private Set<Tag> tags = new HashSet<>();

}

