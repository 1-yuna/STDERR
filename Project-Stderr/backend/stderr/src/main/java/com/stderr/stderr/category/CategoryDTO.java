package com.stderr.stderr.category;

import com.stderr.stderr.post.PostResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor(staticName = "of")
public class CategoryDTO {
    private final Long categoryId;
    private final String categoryName;
    private final Integer postCount;
    private final List<PostResponseDTO> posts;  // 제네릭 타입 D를 사용
}
