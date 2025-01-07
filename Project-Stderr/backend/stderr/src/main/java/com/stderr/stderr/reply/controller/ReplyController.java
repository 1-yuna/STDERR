package com.stderr.stderr.reply.controller;


import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.post.entity.Post;
import com.stderr.stderr.reply.entity.Reply;
import com.stderr.stderr.reply.dto.ReplyRequestDTO;
import com.stderr.stderr.reply.dto.ReplyResponseDTO;
import com.stderr.stderr.reply.dto.PostResponseDTO;
import com.stderr.stderr.reply.dto.UserResponseDTO;
import com.stderr.stderr.post.repository.PostRepository;
import com.stderr.stderr.user.repository.UserRepository;
import com.stderr.stderr.reply.repository.ReplyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;
import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
public class ReplyController {

    private final ReplyRepository replyRepository;
    private final PostRepository postRepository;
    private final UserRepository userRepository;

    // 답글 post
    @PostMapping("/api/post/{postId}/reply")
    public ResponseEntity<ReplyResponseDTO> createReply(@PathVariable Long postId, @RequestBody ReplyRequestDTO replyRequestDTO) {

        // 조회
        Optional<Post> postOptional = postRepository.findById(postId);
        Optional<User> userOptional = userRepository.findById(1L);  // 수정필요

        // user 예외처리
        if (userOptional.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // 유저 없을 경우 예외처리

        // post 예외처리
        if (postOptional.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        // 데이터 불러오기
        User user = userOptional.get();
        Post post = postOptional.get();

        // reply 생성
        Reply reply = new Reply();
        reply.setCode(replyRequestDTO.getCode());
        reply.setContent(replyRequestDTO.getContent());
        reply.setPost(post);
        reply.setUser(user);
        replyRepository.save(reply);

        // userResponseDTO 생성
        UserResponseDTO userResponseDTO = new UserResponseDTO(user.getUserId(), user.getName(), user.getProfileImage());


        // responseDTO 생성
        ReplyResponseDTO responseDTO = new ReplyResponseDTO(
                reply.getReplyId(),
                reply.getContent(),
                reply.getCode(),
                reply.getLikes(),
                reply.getCreatedAt(),
                reply.getUpdatedAt(),
                userResponseDTO
        );
        return ResponseEntity.ok(responseDTO);
    }


    //답글 상세정보
    @GetMapping("api/post/{postId}/reply")
    public ResponseEntity<PostResponseDTO> getReply(@PathVariable Long postId) {

        List<Reply> replyList = replyRepository.findAllByPost_PostId(postId); // postId로 댓글 조회

        // 변환할 리스트 생성
        List<ReplyResponseDTO> replyResponseDTOList = new ArrayList<>();

        // 반복문으로 리스트 변환
        for (Reply reply : replyList) {
            UserResponseDTO userDTO = new UserResponseDTO(
                    reply.getUser().getUserId(),
                    reply.getUser().getName(),
                    reply.getUser().getProfileImage()
            );

            ReplyResponseDTO replyDTO = new ReplyResponseDTO(
                    reply.getReplyId(),
                    reply.getContent(),
                    reply.getCode(),
                    reply.getLikes(),
                    reply.getCreatedAt(),
                    reply.getUpdatedAt(),
                    userDTO
            );

            replyResponseDTOList.add(replyDTO);
        }

        PostResponseDTO response = new PostResponseDTO(postId, replyResponseDTOList);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/api/post/{postId}/reply/{replyId}")
    public ResponseEntity<ReplyResponseDTO> updateReply(@PathVariable Long postId, @PathVariable Long replyId, @RequestBody ReplyRequestDTO replyRequestDTO) {

        // 조회
        Optional<Post> postOptional = postRepository.findById(postId);
        Optional<Reply> replyOptional = replyRepository.findById(replyId);

        // post 예외처리
        if (postOptional.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        // reply 예외처리
        if (replyOptional.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        // 데이터 불러오기
        // Post post = postOptional.get();
        Reply reply = replyOptional.get();
        User user = reply.getUser();

        reply.setCode(replyRequestDTO.getCode());
        reply.setContent(replyRequestDTO.getContent());
        replyRepository.save(reply);

        // userResponseDTO 생성
        UserResponseDTO userResponseDTO = new UserResponseDTO(user.getUserId(), user.getName(), user.getProfileImage());

        // responseDTO 생성
        ReplyResponseDTO responseDTO = new ReplyResponseDTO(
                reply.getReplyId(),
                reply.getContent(),
                reply.getCode(),
                reply.getLikes(),
                reply.getCreatedAt(),
                reply.getUpdatedAt(),
                userResponseDTO
        );

        return ResponseEntity.ok(responseDTO);
    }

    // 답글 삭제
    @DeleteMapping("/api/post/{postId}/reply/{replyId}")
    public ResponseEntity<String> deleteReply(@PathVariable Long postId, @PathVariable Long replyId) {

        Optional<Post> postOptional = postRepository.findById(postId);
        Optional<Reply> replyOptional = replyRepository.findById(replyId);

        if (postOptional.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        if (replyOptional.isEmpty())
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        // Post post = postOptional.get();
        Reply reply = replyOptional.get();

        if (replyRepository.existsById(replyId)) { // 답글 수 감소

            if (reply.getPost() != null)
                reply.getPost().setReplyCount(reply.getPost().getReplyCount() - 1);
        // 답글 삭제
        replyRepository.deleteById(replyId);

        //reply_total_count 감소
        User user = reply.getUser();
        user.setReplyTotalCount(user.getReplyTotalCount() - 1);
        userRepository.save(user);

        return ResponseEntity.ok("successfully");
    }

    else return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

    }
}

