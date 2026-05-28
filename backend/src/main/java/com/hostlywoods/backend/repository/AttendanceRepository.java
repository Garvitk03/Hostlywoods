package com.hostlywoods.backend.repository;


import com.hostlywoods.backend.entity.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository
        extends JpaRepository<Attendance, Long> {
}