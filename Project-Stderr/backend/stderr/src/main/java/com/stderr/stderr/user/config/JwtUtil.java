package com.stderr.stderr.user.config;

import com.stderr.stderr.user.dto.CustomUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class JwtUtil {

    @Value("${jwt.secret.key}")
    private String secretKey;

    private static SecretKey key;

    @PostConstruct
    public void init() {
        this.key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(secretKey));
    }

    // JWT 만들어주는 함수
    public static String createToken(Authentication auth) {

        var user =(CustomUser) auth.getPrincipal();

        String authorities = auth.getAuthorities().stream()
                .map(a -> a.getAuthority()).collect(Collectors.joining(","));

        String jwt = Jwts.builder()
                .claim("userId", user.getUserId())
                .claim("username", user.getUsername())   //입장권에 집어넣을 정보 넣기  +누구나 볼 수 있기 때문에 비밀번호는 적지 마셈
                .claim("authorities", authorities)
                .issuedAt(new Date(System.currentTimeMillis()))  // 언제 발행
                .expiration(new Date(System.currentTimeMillis() + 3600000)) //유효기간 (10초)
                .signWith(key)  // 해싱할 때 넣는 비번
                .compact();
        return jwt;
    }

    // JWT 까주는 함수
    public static Claims extractToken(String token) {
        Claims claims = Jwts.parser().verifyWith(key).build()
                .parseSignedClaims(token).getPayload();
        return claims;
    }

}
