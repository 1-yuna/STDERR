package com.stderr.stderr.category.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.stderr.stderr.post.entity.Post;
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
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="category_id")
    private Long categoryId;

    private String categoryName;
    private Integer postCount =0;

    @ToString.Exclude
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List<Post> posts = new ArrayList<>();

}
