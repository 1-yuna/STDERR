package com.stderr.stderr.user.controller;

import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.post.dto.PostResponseDTO;
import com.stderr.stderr.user.config.JwtUtil;
import com.stderr.stderr.user.dto.JoinRequestDTO;
import com.stderr.stderr.user.dto.UserRequestDTO;
import com.stderr.stderr.user.dto.UserResponseDTO;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/api/user/join")
    public ResponseEntity<String> joinPost(@RequestBody JoinRequestDTO joinRequestDTO) {

        User user = new User();
        user.setUserName(joinRequestDTO.getUserName());
        user.setEmail(joinRequestDTO.getEmail());

        var result = passwordEncoder.encode(joinRequestDTO.getPassword());
        user.setPassword(result);
        user.setName(joinRequestDTO.getName());

        userRepository.save(user);

        return ResponseEntity.ok("Successfully");
    }

    @PostMapping("/api/login")
    public String joinPost(@RequestBody Map<String,String> data, HttpServletResponse response) {

}
