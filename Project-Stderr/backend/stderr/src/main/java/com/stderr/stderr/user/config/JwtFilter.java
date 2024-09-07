package com.stderr.stderr.user.config;

import com.stderr.stderr.user.dto.CustomUser;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Component  // 필터 등록
public class JwtFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        System.out.println("필터 실행됨");

        // 쿠키 (토큰) 가져옴
        Cookie[] cookies = request.getCookies();   // request 변수를 사용하여 쿠키 가져옴

        if (cookies == null) {
            filterChain.doFilter(request, response);
            return;
        }

        // 이름이 jwt인 토큰 찾기
        String jwtCookie = "";
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("jwt")) {
                jwtCookie = cookie.getValue();
                break;
            }
        }

        if (jwtCookie.isEmpty()) {
            filterChain.doFilter(request, response);
            return;
        }

        // 유효기간 등 확인
        Claims claims;
        try {
            claims = JwtUtil.extractToken(jwtCookie);
        } catch (Exception e) {
            System.out.println("유효기간 만료되거나 이상함");
            filterChain.doFilter(request, response);
            return;
        }

        // JWT에서 사용자 정보와 권한 추출
        String username = claims.get("username", String.class);
        String authoritiesString = claims.get("authorities", String.class);

        List<GrantedAuthority> authorities = Arrays.stream(authoritiesString.split(","))
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

        // CustomUser 객체 생성
        CustomUser customUser = new CustomUser(username, "", authorities);

        // UsernamePasswordAuthenticationToken 생성
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                customUser,
                null,
                authorities
        );

        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    }
}
