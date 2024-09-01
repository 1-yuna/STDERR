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
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final TagRepository tagRepository;
    private final PostRepository postRepository;
    private final CategoryRepository categoryRepository;

    //게시판 post
    @PostMapping("/api/post")
    public ResponseEntity<PostResponseDTO> creatPost(@RequestBody PostRequestDTO postRequestDTO){

        // 카테고리 id
        Optional<Category> category = categoryRepository.findById(postRequestDTO.getCategoryId());

        // 태그 처리
        Set<Tag> tags = new HashSet<>();
        List<String> tagNames = postRequestDTO.getTags();

        // null인경우 기본값
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
        post.setCategory(category.get());
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
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

    @GetMapping("api/post/{postId}")
    public ResponseEntity<PostResponseDTO> getPost(@PathVariable long postId){
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
}

