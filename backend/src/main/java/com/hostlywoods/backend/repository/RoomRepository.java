package com.hostlywoods.backend.repository;

import com.hostlywoods.backend.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}
