package com.stderr.stderr.like.controller;

import com.stderr.stderr.like.service.LikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/post/like")
@RequiredArgsConstructor
public class LikeController {

    private final LikeService likeService;

    // 좋아요
    @PostMapping("/{postId}")
    public ResponseEntity<Boolean> createLike(@PathVariable Long postId) {
        Boolean response = likeService.createLike(postId);
        return ResponseEntity.ok(response);
    }

    //좋아요 취소
    @DeleteMapping("/{postId}")
    public ResponseEntity<Boolean> deleteLike(@PathVariable Long postId) {
        Boolean response = likeService.deleteLike(postId);
        return ResponseEntity.ok(response);

    }

}
