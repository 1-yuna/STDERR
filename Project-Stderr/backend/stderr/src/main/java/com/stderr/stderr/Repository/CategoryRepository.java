package com.stderr.stderr.Repository;

import com.stderr.stderr.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category,Long> {
   Optional<Category> findByCategoryName(String categoryName);
}
