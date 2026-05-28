package com.hostlywoods.backend.repository;


import com.hostlywoods.backend.entity.RoomAllocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomAllocationRepository
        extends JpaRepository<RoomAllocation, Long> {
}