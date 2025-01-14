package com.stderr.stderr.post.controller;

import com.stderr.stderr.post.dto.GetPostResDto;
import com.stderr.stderr.post.dto.PostRequestDTO;
import com.stderr.stderr.post.dto.CreatePostResDto;
import com.stderr.stderr.post.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PostController {

    private final PostService postService;

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

    // 게시물 불러오기
    @GetMapping("/{postId}")
    public ResponseEntity<GetPostResDto> getPost(@PathVariable Long postId){

        GetPostResDto response = postService.getPost(postId);
        return ResponseEntity.ok(response);
    }


}



