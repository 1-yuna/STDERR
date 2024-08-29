package com.stderr.stderr.category;

import com.stderr.stderr.board.Board;
import com.stderr.stderr.board.BoardDTO;
import com.stderr.stderr.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryRepository categoryRepository;
    private final BoardRepository boardRepository;

    // 카테고리 별로 게시물 불러오기
    @GetMapping("/api/board/{categoryId}")
     public CategoryDTO<BoardDTO> getCategory(@PathVariable Long categoryId, @RequestParam String categoryName) {

        // 카테고리에 해당하는 게시물 목록 조회
        List<Board> boards = boardRepository.findAllByCategoryId(categoryId);

        // 게시물 수 계산
        Integer boardCount = boards.size();

        // BoardDTO에 데이터 값 저장
        List<String> tags = Arrays.asList("tag1","tag2");
        var boardData = new BoardDTO("title", "content", 1, 2, tags);

        Category result = new Category();
        result.setId(categoryId);
        result.setCategoryName(categoryName);
        result.setBoardCount(boardCount);
        categoryRepository.save(result);

        // CategoryDTO 생성 및 반환
        return CategoryDTO.of(categoryId, categoryName, boardCount, boardData);



    }
}
