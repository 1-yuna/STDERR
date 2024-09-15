package com.stderr.stderr.post.repository;

import com.stderr.stderr.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    List<Post> findAllByCategory_CategoryId(Long categoryId);
    Integer countByCategory_CategoryId(Long categoryId);
}
