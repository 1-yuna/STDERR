package com.stderr.stderr.Controller;

import com.stderr.stderr.DTO.PostRequestDTO;
import com.stderr.stderr.DTO.PostResponseDTO;
import com.stderr.stderr.Entity.Post;
import com.stderr.stderr.Repository.PostRepository;
import com.stderr.stderr.Entity.Category;
import com.stderr.stderr.Repository.CategoryRepository;
import com.stderr.stderr.Entity.Tag;
import com.stderr.stderr.Repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final TagRepository tagRepository;
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;

    //게시물 post
    @PostMapping("/api/post")
    public ResponseEntity<PostResponseDTO> creatPost(@RequestBody PostRequestDTO postRequestDTO){

        // 카테고리 조회
        Optional<Category> categoryOptional = categoryRepository.findById(postRequestDTO.getCategoryId());

        // 카운트 업데이트
        if (categoryOptional.isPresent()) {
            Category category = categoryOptional.get();
            updatePostCountForCategory(category, 1);
        }

        // 태그 처리
        Set<Tag> tags = new HashSet<>();
        List<String> tagNames = postRequestDTO.getTags();

        if (tagNames == null) {
            tagNames = new ArrayList<>();
        }
        System.out.println(tagNames);
        for (String tagName : tagNames) {
            Optional<Tag> optionalTag = tagRepository.findByTagName(tagName);
            Tag tag;  // 변수 선언

            // tag가 이미 존재할 경우
            if (optionalTag.isPresent()) {
                tag = optionalTag.get();
            } else {  // 존재하지 않으면 tag 테이블에 저장
                tag = new Tag();
                tag.setTagName(tagName);
                tag = tagRepository.save(tag);
            }
            tags.add(tag);  // 유저가 입력한 모든 태그 저장
        }

        // 저장
        Post post = new Post();
        post.setTitle(postRequestDTO.getTitle());
        post.setContent(postRequestDTO.getContent());
        post.setCode(postRequestDTO.getCode());
        post.setCategory(categoryOptional.get());
        post.setCreatedAt(LocalDateTime.now());
        post.setTags(tags);
        postRepository.save(post);

        //response 응답
        PostResponseDTO responseDTO = new PostResponseDTO (
                post.getPostId(),
                post.getTitle(),
                post.getContent(),
                post.getCode(),
                post.getLikes(),
                post.getReply(),
                post.getTags()
        );

        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);

    }

    // 게시물 상세정보
    @GetMapping("api/post/{postId}")
    public ResponseEntity<PostResponseDTO> getPost(@PathVariable long postId){

        // 게시글 조회
        Optional<Post> result = postRepository.findById(postId);

        if (result.isPresent()) {
            Post post = result.get();
            System.out.println(post);

            PostResponseDTO responseDTO = new PostResponseDTO(
                    post.getPostId(),
                    post.getTitle(),
                    post.getContent(),
                    post.getCode(),
                    post.getLikes(),
                    post.getReply(),
                    post.getTags()
            );

            return ResponseEntity.ok(responseDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // HTTP 404 Not Found 응답
        }
    }

    // 게시물 수정
    @PutMapping("api/post/{postId}")
    public ResponseEntity<Post> updatePost(@PathVariable Long postId, @RequestBody PostRequestDTO postRequestDTO){

        // 게시물 조회
        Optional<Post> postOptional = postRepository.findById(postId);
        if(!postOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        Post post = postOptional.get();

        // 이전 카테고리 게시물 수 감소
        if (post.getCategory() != null) {
            updatePostCountForCategory(post.getCategory(), -1);
        }

        // 새 카테고리에서 게시물 수 증가
        Optional<Category> categoryOptional = categoryRepository.findById(postRequestDTO.getCategoryId());


        // 카테고리 업데이트
        if (categoryOptional.isPresent()) {
            // 게시물 수 계산 $$ 업데이트
            Category category = categoryOptional.get();
            updatePostCountForCategory(category, 1);

            post.setCategory(category);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // 카테고리 ID가 유효하지 않으면 400 오류 반환
        }

        // tag 추가
        Set<Tag> tags = new HashSet<>();
        List<String> tagNames = postRequestDTO.getTags();
        if (tagNames == null) {
            tagNames = new ArrayList<>();
        }
        for (String tagName : tagNames) {
            Optional<Tag> optionalTag = tagRepository.findByTagName(tagName);
            Tag tag;
            if (optionalTag.isPresent()) {
                tag = optionalTag.get();
            } else {
                tag = new Tag();
                tag.setTagName(tagName);
                tag = tagRepository.save(tag);
            }
            tags.add(tag);
        }
        post.setTags(tags);

        // 게시물 업데이트
        post.setTitle(postRequestDTO.getTitle());
        post.setContent(postRequestDTO.getContent());
        post.setCode(postRequestDTO.getCode());
        post.setUpdatedAt(LocalDateTime.now()); // 수정 시각 업데이트
        postRepository.save(post);

        return ResponseEntity.ok(post);
    }

    // 카테고리 게시물 수 업데이트
    private void updatePostCountForCategory(Category category, int increment) {
        Integer postCount = postRepository.countByCategory_CategoryId(category.getCategoryId());
        category.setPostCount(postCount + increment);
        categoryRepository.save(category);
    }
}



