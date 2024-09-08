package com.stderr.stderr.user.dto;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.stderr.stderr.tag.entity.Tag;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;


@Getter
@Setter
@ToString
@JsonPropertyOrder({"userId", "name", "profileImage", "description", "likeTotalCount", "postTotalCount", "replyTotalCount", "visiterTotalCount", "grade", "gitAddress", "tistoryAddress", "userWedAddress"})
public class UserResponseDTO {
    private Long userId;
    private String name;
    private String profileImage;
    private String description;
    private Integer likeTotalCount;
    private Integer PostTotalCount;
    private Integer replyTotalCount;
    private Integer visiterTotalCount;
    private Integer grade;
    private String gitAddress;
    private String tistoryAddress;
    private String userWedAddress;


    public UserResponseDTO(Long id, String name, String profileImage, String description, Integer likeTotalCount, Integer PostTotalCount, Integer replyTotalCount,Integer visiterTotalCount, Integer grade, String gitAddress, String tistoryAddress, String userWedAddress){  // constructor
        this.userId = id;
        this.name = name;
        this.profileImage = profileImage;
        this.description =description;
        this.likeTotalCount = likeTotalCount;
        this.PostTotalCount = PostTotalCount;
        this.replyTotalCount = replyTotalCount;
        this.visiterTotalCount = visiterTotalCount;
        this.grade = grade;
        this.gitAddress = gitAddress;
        this.tistoryAddress = tistoryAddress;
        this.userWedAddress = userWedAddress;
    }
}
