package com.stderr.stderr.category;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor(staticName = "of")
public class CategoryDTO<D> {
    private final Long id;
    private final String categoryName;
    private final Integer boardCount;
    private final D data;  // 제네릭 타입 D를 사용
}
