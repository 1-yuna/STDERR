package com.stderr.stderr.user.repository;

import com.stderr.stderr.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
