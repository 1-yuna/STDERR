package com.stderr.stderr.category.controller;

import com.stderr.stderr.category.dto.CategoryResponseDTO;
import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.category.repository.CategoryRepository;
import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.post.dto.PostResponse;
import com.stderr.stderr.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CategoryController {

    private final CategoryRepository categoryRepository;
    private final PostRepository postRepository;

    // 카테고리 별로 게시물 불러오기
    @GetMapping("/api/category/{categoryId}")
     public CategoryResponseDTO getCategory(@PathVariable Long categoryId) {

        // 게시물 조회
        List<Post> posts = postRepository.findAllByCategory_CategoryId(categoryId);

        //카테고리 조회
        Optional<Category> categories = categoryRepository.findById(categoryId);
        Category category = categories.get();

        // 이름, id 조회
        String categoryName = category.getCategoryName();
        Long id = category.getCategoryId();

        // 게시물 수
        Integer postCount = category.getPostCount();

        //response 응답
//        List<PostResponse> postResponseDTOs = posts.stream()
//                .map(post -> new PostResponse(
//                        post.getPostId(),
//                        post.getTitle(),
//                        post.getContent(),
//                        post.getCode(),
//                        post.getLikes(),
//                        post.getReply(),
//                        post.getTags()
//                ))
//                .collect(Collectors.toList());

        // CategoryDTO 생성 및 반환
        // return CategoryResponseDTO.of(id, categoryName,postCount,postResponseDTOs);
        return null;
    }
}
