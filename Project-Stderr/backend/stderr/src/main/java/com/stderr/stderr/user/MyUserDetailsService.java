package com.stderr.stderr.user;

import com.stderr.stderr.user.dto.CustomUser;
import com.stderr.stderr.user.entity.User;
import com.stderr.stderr.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


// db에 있는 회원 정보와 비교
@Service
@RequiredArgsConstructor
public class MyUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 1. DB에서 username을 가진 유저를 찾아와서
        var userOptional = userRepository.findAllByUsername(username);
        if (userOptional.isEmpty()){              // 비어있으면 에러코드
            throw new UsernameNotFoundException("그런 아이디 없음");
        }

        var user = userOptional.get();

        // 권한
        List<GrantedAuthority> authorities = new ArrayList<>();   // 권한을 적어놓은 list (GrantedAuthority: 권한 적으려면 적어야됨(강요) )
        authorities.add(new SimpleGrantedAuthority("일반유저"));

        // 2. return new User(유저아이디, 비번, 권한) 해주세요
        return new CustomUser(user.getUsername(),user.getPassword(), authorities);


    }

}
