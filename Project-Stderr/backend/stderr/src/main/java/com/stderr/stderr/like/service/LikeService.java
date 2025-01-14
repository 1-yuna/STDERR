package com.stderr.stderr.like.service;

import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.post.repository.PostRepository;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class LikeService {
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    // like 추가
    public Boolean createLike (Long postId){
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("Post not found"));

        post.setLikeCount(post.getLikeCount() + 1);
        postRepository.save(post);

        // 작성자의 likeTotalCount 증가
        User user = post.getUser();
        user.setLikeTotalCount(user.getLikeTotalCount() + 1);
        userRepository.save(user);

        return true;

    }

    // like 삭제
    public Boolean deleteLike (Long postId){

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("Post not found"));

        if (post.getLikeCount() > 0) {
            post.setLikeCount(post.getLikeCount() - 1);
            postRepository.save(post);
        }

        // 작성자의 likeTotalCount 감소
        User user = post.getUser();
        if (user != null && user.getLikeTotalCount() > 0) {
            user.setLikeTotalCount(user.getLikeTotalCount() - 1);
            userRepository.save(user);
        }

        return true;
    }
}
