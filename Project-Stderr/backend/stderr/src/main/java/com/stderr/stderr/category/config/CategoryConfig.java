package com.stderr.stderr.category.config;

import com.stderr.stderr.category.entity.Category;
import com.stderr.stderr.category.repository.CategoryRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CategoryConfig {


    private final CategoryRepository categoryRepository;


    @PostConstruct
    public void init() {
        // 카테고리 데이터 추가
        addCategory("C / C++ / C#");
        addCategory("Java / Kotlin");
        addCategory("Python");
        addCategory("Go / Rust / Zig");
        addCategory("Swift");
        addCategory("etc.");
        addCategory("Forum");
    }

    private void addCategory(String name) {
        if(categoryRepository.findByCategoryName(name).isEmpty()){
            Category category = new Category();
            category.setCategoryName(name);
            categoryRepository.save(category);
        }

    }
}
