package com.stderr.stderr.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

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