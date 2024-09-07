package com.stderr.stderr.Repository;

import com.stderr.stderr.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
