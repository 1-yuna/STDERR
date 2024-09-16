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

import java.util.Map;

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
        user.setUsername(joinRequestDTO.getUsername());
        user.setEmail(joinRequestDTO.getEmail());

        var result = passwordEncoder.encode(joinRequestDTO.getPassword());
        user.setPassword(result);
        user.setName(joinRequestDTO.getName());

        userRepository.save(user);

        return ResponseEntity.ok("Successfully");
    }

    @PostMapping("/api/user/login")
    public ResponseEntity<String> joinPost(@RequestBody Map<String,String> data, HttpServletResponse response) {

        // 로그인 시켜주세요
        var authToken = new UsernamePasswordAuthenticationToken(
                data.get("username"), data.get("password")
        );

        // 사용자 인증 시도(비교)
        var auth = authenticationManager.authenticate(authToken);
        // SecurityContext에 Authentication(auth) 저장
        SecurityContextHolder.getContext().setAuthentication(auth);


        // Token 발급(auth 보내줌)
        var jwt = JwtUtil.createToken(SecurityContextHolder.getContext().getAuthentication());

        var cookie = new Cookie("jwt", jwt);  // 쿠키이름, 값
        cookie.setMaxAge(360); // 쿠키의 유효기간 (10)초 -> jwt 유효기간이랑 비슷하게
        cookie.setHttpOnly(true);   // 해킹->자바스크립트 조작하기 어려워짐
        cookie.setPath("/");  // 경로 (쿠키가 전송될 url ) -> 모든 url에 전송
        response.addCookie(cookie); // 유저 브라우저에 쿠키 강제 저장

        System.out.println(jwt);
        return ResponseEntity.ok(jwt);

    }
}
