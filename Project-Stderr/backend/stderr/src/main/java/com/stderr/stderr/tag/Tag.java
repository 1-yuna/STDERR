package com.stderr.stderr.tag;


import com.stderr.stderr.post.Post;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@ToString
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tag_id")
    private Integer tagId;

    private String tagName;

    // @ManyToMany(mappedBy = "tags")
    // private List<Post> posts = new ArrayList<>();
}
