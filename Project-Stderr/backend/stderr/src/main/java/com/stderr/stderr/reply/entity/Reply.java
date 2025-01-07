package com.stderr.stderr.reply.entity;

import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.user.entity.User;
import jakarta.persistence.*;
// import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
// @AllArgsConstructor
public class Reply {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="reply_id")
    private Long replyId;

    private String content;
    private String code;
    private Integer likes = 0;

    @CreationTimestamp
    private LocalDateTime createdAt;
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "post_id", foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
    private Post post;

    @ManyToOne
    @JoinColumn(name ="user_id", foreignKey = @ForeignKey(ConstraintMode.CONSTRAINT))
    private User user;

    // Reply_Like 매핑 테이블 수정 고려
}
