package com.stderr.stderr.category.service;

import com.stderr.stderr.category.dto.GetCategoryResDto;
import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.category.repository.CategoryRepository;
import com.stderr.stderr.post.dto.GetPostResDto;
import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final PostRepository postRepository;

    public GetCategoryResDto getCategory(Long categoryId) {

        // 게시물 조회
        List<Post> posts = postRepository.findAllByCategory_CategoryId(categoryId);

        //카테고리 조회
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new IllegalArgumentException("Category not found"));

        // 게시물 수
        Long postCount = postRepository.countByCategory(category);

        //post response
        List<GetPostResDto> postResponse = posts.stream()
                .map(post -> new GetPostResDto(
                        post.getPostId(),
                        post.getTitle(),
                        post.getContent(),
                        post.getCode(),
                        post.getLikeCount(),
                        post.getReplyCount(),
                        post.getTags()
                ))
                .collect(Collectors.toList());

        // response
        GetCategoryResDto response = new GetCategoryResDto(
                category.getCategoryId(),
                category.getCategoryName(),
                postCount,
                postResponse
        );

        return response;
    }
}
