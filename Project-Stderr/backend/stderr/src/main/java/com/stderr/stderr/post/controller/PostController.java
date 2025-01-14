package com.stderr.stderr.post.controller;

import com.stderr.stderr.post.dto.PostRequestDTO;
import com.stderr.stderr.post.dto.CreatePostResDto;
import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.post.repository.PostRepository;
import com.stderr.stderr.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService postService;
    private final PostRepository postRepository;

    //게시물 생성
    @PostMapping
    public ResponseEntity<CreatePostResDto> creatPost(@RequestBody PostRequestDTO request){

        CreatePostResDto response = postService.createPost(request);
        return ResponseEntity.ok(response);

    }

    // 게시물 수정
    @PutMapping("/{postId}")
    public ResponseEntity<Boolean> updatePost(@PathVariable Long postId, @RequestBody PostRequestDTO request){

        Boolean response = postService.updatePost(postId, request);
        return ResponseEntity.ok(response);
    }

    // 게시물 삭제
    @DeleteMapping("/{postId}")
    public ResponseEntity<Boolean> deletePost(@PathVariable Long postId){

       Boolean response = postService.deletePost(postId);
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


}



