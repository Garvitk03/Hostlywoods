package com.hostlywoods.backend.repository;

import com.hostlywoods.backend.entity.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorRepository extends JpaRepository<Visitor, Long> {
}
