package com.stderr.stderr.user.repository;

import com.stderr.stderr.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
// username으로 행 뽑아오기
    Optional<User> findAllByUsername(String username);

    Optional<User> findByUsername(String username);
}
