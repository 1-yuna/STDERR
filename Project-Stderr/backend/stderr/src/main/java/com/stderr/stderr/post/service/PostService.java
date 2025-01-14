package com.stderr.stderr.post.service;

import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.category.repository.CategoryRepository;
import com.stderr.stderr.post.component.CreateTag;
import com.stderr.stderr.post.dto.PostRequestDTO;
import com.stderr.stderr.post.dto.PostResponse;
import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.post.repository.PostRepository;
import com.stderr.stderr.tag.entity.Tag;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.*;

@Service
@AllArgsConstructor
public class PostService {

    private final CreateTag createTag;
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    //게시물 생성
    public PostResponse.CreatePostResDTO createPost(@RequestBody PostRequestDTO request) {

        // 유저 찾기
        User user = userRepository.findById(1L)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        // 카테고리 찾기
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        // 태그 저장
        Set<Tag> tags = createTag.exec(request.getTags());


        // 저장
        Post post = Post.builder()
                .title(request.getTitle())
                .content(request.getContent())
                .code(request.getCode())
                .category(category)
                .user(user)
                .createdAt(LocalDateTime.now())
                .tags(tags)
                .build();

        postRepository.save(post);


        //response 응답
        PostResponse.CreatePostResDTO response = new PostResponse.CreatePostResDTO(
                post.getPostId()
        );

        return response;
    }
}
