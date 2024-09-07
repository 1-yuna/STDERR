package com.stderr.stderr.user.controller;

import com.stderr.stderr.user.dto.JoinRequestDTO;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/api/join")
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


}
