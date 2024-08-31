package com.stderr.stderr.post;

import com.stderr.stderr.category.Category;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private String Code;
    private Integer likes;
    private Integer reply;
    private LocalDateTime createdAt;  // 생성 날짜
    private LocalDateTime updatedAt;  // 업데이트 날짜

    @ManyToOne
    @JoinColumn(name="categoryId", foreignKey = @ForeignKey(ConstraintMode.NO_CONSTRAINT))
    private Category category;
    // private Long userId = 1L;

}

