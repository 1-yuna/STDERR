package com.stderr.stderr.category;

import com.stderr.stderr.post.Post;
import com.stderr.stderr.post.PostDTO;
import com.stderr.stderr.post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryRepository categoryRepository;
    private final PostRepository postRepository;

    // 카테고리 별로 게시물 불러오기
    @GetMapping("/api/board/{categoryId}")
     public CategoryDTO<PostDTO> getCategory(@PathVariable Long categoryId) {

        // 카테고리에 해당하는 게시물 목록 조회
        List<Post> posts = postRepository.findAllByCategoryId(categoryId);

        //카테고리 이름 조회
        Optional<Category> categories = categoryRepository.findById(categoryId);
        Category category = categories.get();

        String categoryName = category.getCategoryName();

        // 게시물 수 계산
        Integer postCount = posts.size();

        // BoardDTO에 데이터 값 저장
        List<String> tags = Arrays.asList("tag1","tag2");
        var postData = new PostDTO("title", "content", 1, 2, tags);

        category.setPostCount(postCount);
        categoryRepository.save(category);

        // CategoryDTO 생성 및 반환
        return CategoryDTO.of(categoryId, categoryName, postCount, postData);



    }
}
