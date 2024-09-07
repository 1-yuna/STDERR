package com.stderr.stderr.user.controller;

import com.stderr.stderr.user.config.JwtUtil;
import com.stderr.stderr.user.dto.JoinRequestDTO;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

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

    @PostMapping("/api/login")
    public String joinPost(@RequestBody Map<String,String> data) {

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
        System.out.println(jwt);
        return jwt;

    }


}
