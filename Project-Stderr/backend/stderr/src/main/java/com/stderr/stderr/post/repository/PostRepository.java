package com.stderr.stderr.post.repository;

import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post,Long> {
    List<Post> findAllByCategory_CategoryId(Long categoryId);
}
