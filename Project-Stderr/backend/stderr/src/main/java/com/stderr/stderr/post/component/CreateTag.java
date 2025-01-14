package com.stderr.stderr.post.component;

import com.stderr.stderr.tag.entity.Tag;
import com.stderr.stderr.tag.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class CreateTag {

    private final TagRepository tagRepository;

    public Set<Tag> exec(List<String> tagNames) {

        Set<Tag> tags = new HashSet<>();

        for (String tagName : tagNames) {
            // 태그 존재 확인
            Optional<Tag> optionalTag = tagRepository.findByTagName(tagName);

            // 태그가 존재하지 않으면 새로 저장
            if (optionalTag.isEmpty()) {
                Tag newTag = new Tag();
                newTag.setTagName(tagName);
                tags.add(tagRepository.save(newTag));
            } else {
                tags.add(optionalTag.get());
            }
        }
        return tags;
    }
}
