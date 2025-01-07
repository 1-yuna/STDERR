package com.stderr.stderr.reply.repository;

import java.util.List;

import com.stderr.stderr.reply.dto.ReplyResponseDTO;
import com.stderr.stderr.reply.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
    List<Reply> findAllByPost_PostId(Long postId);
    Integer countByPost_PostId(Long postId);
}
