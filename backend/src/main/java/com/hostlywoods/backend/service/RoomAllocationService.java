package com.hostlywoods.backend.service;

import com.hostlywoods.backend.dto.RoomAllocationRequest;
import com.hostlywoods.backend.entity.Room;
import com.hostlywoods.backend.entity.RoomAllocation;
import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.repository.RoomAllocationRepository;
import com.hostlywoods.backend.repository.RoomRepository;
import com.hostlywoods.backend.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class RoomAllocationService {
    @Autowired
    private RoomAllocationRepository allocationRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private RoomRepository roomRepository;

    public RoomAllocation allocateRoom(
            RoomAllocationRequest request
    ) {

        Student student = studentRepository
                .findById(request.getStudentId())
                .orElseThrow();

        Room room = roomRepository
                .findById(request.getRoomId())
                .orElseThrow();

        if (room.getOccupiedCount() >= room.getCapacity()) {
            throw new RuntimeException("Room Full");
        }

        room.setOccupiedCount(
                room.getOccupiedCount() + 1
        );

        if (room.getOccupiedCount()
                .equals(room.getCapacity())) {

            room.setOccupied(true);
        }

        roomRepository.save(room);

        RoomAllocation allocation =
                new RoomAllocation();

        allocation.setAllocationDate(LocalDate.now());

        allocation.setStudent(student);

        allocation.setRoom(room);

        return allocationRepository.save(allocation);
    }
}
