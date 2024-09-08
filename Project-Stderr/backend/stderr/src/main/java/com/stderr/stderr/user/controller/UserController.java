package com.stderr.stderr.user.controller;

import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.post.dto.PostResponseDTO;
import com.stderr.stderr.user.dto.JoinRequestDTO;
import com.stderr.stderr.user.dto.UserResponseDTO;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/api/user/join")
    public ResponseEntity<String> joinPost(@RequestBody JoinRequestDTO joinRequestDTO) {

        User user = new User();
        user.setUsername(joinRequestDTO.getUsername());
        user.setEmail(joinRequestDTO.getEmail());

        var result = passwordEncoder.encode(joinRequestDTO.getPassword());
        user.setPassword(result);
        user.setName(joinRequestDTO.getName());

        userRepository.save(user);

        return ResponseEntity.ok("Successfully");
    }


    @GetMapping("/api/user/myPage/{userId}")
    public ResponseEntity<UserResponseDTO> myPageGet(@PathVariable long userId) {

        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            UserResponseDTO responseDTO = new UserResponseDTO (
                    user.getUserId(),
                    user.getName(),
                    user.getProfileImage(),
                    user.getDescription(),
                    user.getLikeTotalCount(),
                    user.getPostTotalCount(),
                    user.getReplyTotalCount(),
                    user.getVisiterTotalCount(),
                    user.getGrade(),
                    user.getGitAddress(),
                    user.getTistoryAddress(),
                    user.getUserWebAddress()

            );

            return ResponseEntity.ok(responseDTO);
        } else {
            return ResponseEntity.notFound().build();

        }


    }


}
