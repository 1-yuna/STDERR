package com.stderr.stderr.category.dto;

import com.stderr.stderr.post.dto.PostResponseDTO;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor(staticName = "of")
public class CategoryResponseDTO {
    private final Long categoryId;
    private final String categoryName;
    private final Integer postCount;
    private final List<PostResponseDTO> posts;  // 제네릭 타입 D를 사용
}
