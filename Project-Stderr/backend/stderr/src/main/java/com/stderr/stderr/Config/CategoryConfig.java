package com.stderr.stderr.Config;

import com.stderr.stderr.Entity.Category;
import com.stderr.stderr.Repository.CategoryRepository;
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
        addCategory("C/C++/C#");
        addCategory("Java/Kotlin");
        addCategory("Python");
        addCategory("JavaScript");
        addCategory("HTML/CSS");
        addCategory("React/Vue");
        addCategory("etc.");
    }

    private void addCategory(String name) {
        if(categoryRepository.findByCategoryName(name).isEmpty()){
            Category category = new Category();
            category.setCategoryName(name);
            categoryRepository.save(category);
        }

    }
}
