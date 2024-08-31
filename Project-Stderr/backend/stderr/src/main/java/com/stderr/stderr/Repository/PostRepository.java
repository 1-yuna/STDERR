package com.stderr.stderr.Repository;

import com.stderr.stderr.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    List<Post> findAllByCategory_CategoryId(Long categoryId);
}
