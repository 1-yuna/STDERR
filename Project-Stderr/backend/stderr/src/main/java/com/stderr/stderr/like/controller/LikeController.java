package com.stderr.stderr.like.controller;

import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.post.repository.PostRepository;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class LikeController {

    private final PostRepository postRepository;
    private final UserRepository userRepository;


    // post,myPage 좋아요
    @PostMapping("/api/post/{postId}/like")
    public ResponseEntity<Boolean> likePost(@PathVariable Long postId) {
        Optional<Post> postOptional = postRepository.findById(postId);

        if (postOptional.isPresent()) {
            Post post = postOptional.get();
            post.setLikes(post.getLikes() + 1);
            postRepository.save(post);

            // 작성자의 likeTotalCount 증가
            User user = post.getUser();
            user.setLikeTotalCount(user.getLikeTotalCount() + 1);
            userRepository.save(user);

            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }
    }

    // post,myPage 좋아요 취소
    @DeleteMapping("/api/post/{postId}/like")
    public ResponseEntity<Boolean> unLikePost(@PathVariable Long postId) {
        Optional<Post> postOptional = postRepository.findById(postId);
        if (postOptional.isPresent()) {
            Post post = postOptional.get();
            if (post.getLikes() > 0) {
                post.setLikes(post.getLikes() - 1);
                postRepository.save(post);

                // 작성자의 likeTotalCount 감소
                User user = post.getUser();
                if (user != null && user.getLikeTotalCount() > 0) {
                    user.setLikeTotalCount(user.getLikeTotalCount() - 1);
                    userRepository.save(user);
                }
                return ResponseEntity.ok(true);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }
    }



}
