package com.stderr.stderr.category.controller;

import com.stderr.stderr.category.dto.GetCategoryResDto;
import com.stderr.stderr.category.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/category")
@CrossOrigin(origins = "*")
public class CategoryController {

    private final CategoryService categoryService;

    // 카테고리 별로 게시물 불러오기
    @GetMapping("/{categoryId}")
    public ResponseEntity<GetCategoryResDto> getCategory(@PathVariable Long categoryId) {

        GetCategoryResDto response = categoryService.getCategory(categoryId);
        return ResponseEntity.ok(response);
    }
}
