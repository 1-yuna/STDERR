package com.stderr.stderr.post.controller;

import com.stderr.stderr.post.dto.PostRequestDTO;
import com.stderr.stderr.post.dto.PostResponse;
import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.post.repository.PostRepository;
import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.category.repository.CategoryRepository;
import com.stderr.stderr.post.service.PostService;
import com.stderr.stderr.tag.entity.Tag;
import com.stderr.stderr.tag.repository.TagRepository;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService postService;
    private final TagRepository tagRepository;
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;


    //게시물 생성
    @PostMapping
    public ResponseEntity<PostResponse.CreatePostResDTO> creatPost(@RequestBody PostRequestDTO request){

        PostResponse.CreatePostResDTO response = postService.createPost(request);
        return ResponseEntity.ok(response);

    }

    // 게시물 상세정보
    @GetMapping("api/post/{postId}")
    public ResponseEntity<Post> getPost(@PathVariable long postId){

        Optional<Post> postOptional = postRepository.findById(postId);

        if (postOptional.isPresent()) {
            Post post = postOptional.get();
            return ResponseEntity.ok(post);

        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();  // HTTP 404 Not Found 응답
        }
    }

    // 게시물 수정
    @PutMapping("api/post/{postId}")
    public ResponseEntity<Post> updatePost(@PathVariable Long postId, @RequestBody PostRequestDTO postRequestDTO){

        Optional<Post> postOptional = postRepository.findById(postId);
        Optional<Category> categoryOptional = categoryRepository.findById(postRequestDTO.getCategoryId());


        if(postOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Post post = postOptional.get();

        // 이전 카테고리 게시물 수 감소
        if (post.getCategory() != null) {
            Category category = post.getCategory();
            category.setPostCount(category.getPostCount() - 1); // 게시물 수 감소
            categoryRepository.save(category);
        }

        //카운트 증가
        if (categoryOptional.isPresent()) {
            Category category = categoryOptional.get();
            category.setPostCount(category.getPostCount() + 1);
            post.setCategory(category);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();// 카테고리 ID가 유효하지 않으면 400 오류 반환
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
        post.setUpdatedAt(LocalDateTime.now());
        postRepository.save(post);

        return ResponseEntity.ok(post);
    }

    // 게시물 삭제
    @DeleteMapping("api/post/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable long postId){

        Optional<Post> postOptional = postRepository.findById(postId);

        if(postOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        Post post = postOptional.get();

        if(postRepository.existsById(postId)){
            // 게시물 수 감소
            if (post.getCategory() != null) {
                post.getCategory().setPostCount(post.getCategory().getPostCount() - 1);
            }
            // 게시물 삭제
            postRepository.deleteById(postId);

            // post_total_count 감소
            User user = post.getUser();
            user.setPostTotalCount(user.getPostTotalCount() - 1);
            userRepository.save(user);

            return ResponseEntity.ok("successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        }
    }

}



