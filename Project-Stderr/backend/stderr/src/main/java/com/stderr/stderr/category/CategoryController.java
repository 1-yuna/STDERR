package com.stderr.stderr.category;

import com.stderr.stderr.post.Post;
import com.stderr.stderr.post.PostResponseDTO;
import com.stderr.stderr.post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryRepository categoryRepository;
    private final PostRepository postRepository;

    // 카테고리 별로 게시물 불러오기
    @GetMapping("/api/post/{categoryId}")
     public CategoryDTO getCategory(@PathVariable Long categoryId) {

        // 게시물 조회
        List<Post> posts = postRepository.findAllByCategory_CategoryId(categoryId);

        //카테고리 조회
        Optional<Category> categories = categoryRepository.findById(categoryId);
        Category category = categories.get();

        // 이름, id 조회
        String categoryName = category.getCategoryName();
        Long id = category.getCategoryId();

        // 게시물 수 계산
        Integer postCount = posts.size();
        category.setPostCount(postCount);
        categoryRepository.save(category);

        //response 응답
        List<PostResponseDTO> postResponseDTOs = posts.stream()
                .map(post -> new PostResponseDTO(
                        post.getPostId(),
                        post.getTitle(),
                        post.getContent(),
                        post.getLikes(),
                        post.getReply(),
                        post.getCode(),
                        post.getTags()
                ))
                .collect(Collectors.toList());

        // CategoryDTO 생성 및 반환
        return CategoryDTO.of(id, categoryName,postCount,postResponseDTOs);



    }
}
