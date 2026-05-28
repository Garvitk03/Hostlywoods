package com.hostlywoods.backend.controller;

import com.hostlywoods.backend.dto.RoomAllocationRequest;
import com.hostlywoods.backend.entity.Room;
import com.hostlywoods.backend.entity.RoomAllocation;
import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.repository.RoomAllocationRepository;
import com.hostlywoods.backend.repository.RoomRepository;
import com.hostlywoods.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/allocations")
@RequiredArgsConstructor
public class RoomAllocationController {
    private final RoomAllocationRepository allocationRepository;
    private final StudentRepository studentRepository;
    private final RoomRepository roomRepository;

    @PostMapping
    public String allocateRoom(@RequestBody RoomAllocationRequest request) {

        Student student = studentRepository.findById(request.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Room room = roomRepository.findById(request.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));

        RoomAllocation allocation = new RoomAllocation();

        allocation.setStudent(student);
        allocation.setRoom(room);
        allocation.setAllocationDate(LocalDate.now());

        room.setOccupiedCount(room.getOccupiedCount() + 1);
        roomRepository.save(room);

        allocationRepository.save(allocation);

        return "Room Allocated Successfully";
    }
}
