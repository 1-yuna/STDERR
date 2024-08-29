package com.stderr.stderr.category;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Entity
@Setter
@Getter
@ToString
public class Category {
    @Id
    private Long id;
    private String CategoryName;
    private Integer boardCount;

}
