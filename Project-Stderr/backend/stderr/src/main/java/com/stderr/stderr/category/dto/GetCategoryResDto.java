package com.stderr.stderr.category.dto;

import com.stderr.stderr.post.dto.GetPostResDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class GetCategoryResDto {

        private Long categoryId;
        private String categoryName;
        private Long postCount;
        private List<GetPostResDto> posts;
}
