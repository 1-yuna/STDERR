package com.stderr.stderr.tag.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="tag_id")
    private Integer tagId;

    private String tagName;

    // @ManyToMany(mappedBy = "tags")
    // private List<Post> posts = new ArrayList<>();
}
