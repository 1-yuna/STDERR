package com.stderr.stderr.post.service;

import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.category.repository.CategoryRepository;
import com.stderr.stderr.post.component.CreateTag;
import com.stderr.stderr.post.dto.PostRequestDTO;
import com.stderr.stderr.post.dto.CreatePostResDto;
import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.post.repository.PostRepository;
import com.stderr.stderr.tag.entity.Tag;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

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
    public CreatePostResDto createPost(PostRequestDTO request) {

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
        CreatePostResDto response = new CreatePostResDto(
                post.getPostId()
        );

        return response;
    }


    // 게시물 수정
    public Boolean updatePost(Long postId, PostRequestDTO request) {

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("Post not found"));

        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        // tag 추가
        Set<Tag> tags = createTag.exec(request.getTags());

        // 게시물 업데이트
        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        post.setCode(request.getCode());
        post.setCategory(category);
        post.setTags(tags);
        post.setUpdatedAt(LocalDateTime.now());

        postRepository.save(post);

        return true;
    }

    public Boolean deletePost(Long postId) {
        postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("Post not found"));

        postRepository.deleteById(postId);

        return true;

    }
}
