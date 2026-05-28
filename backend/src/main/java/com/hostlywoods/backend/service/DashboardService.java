package com.hostlywoods.backend.service;

import com.hostlywoods.backend.dto.DashboardResponse;

import com.hostlywoods.backend.repository.*;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service

public class DashboardService {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ComplaintRepository complaintRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private AttendanceRepository attendanceRepository;

    public DashboardResponse getDashboardAnalytics() {

        Long totalStudents =
                studentRepository.count();

        Long totalRooms =
                roomRepository.count();

        Long occupiedRooms =
                roomRepository.countByOccupied(true);

        Double totalRevenue =
                paymentRepository.getTotalRevenue();

        Long totalComplaints =
                complaintRepository.count();

        Long resolvedComplaints =
                complaintRepository.countByStatus("RESOLVED");

        Long totalAttendance =
                attendanceRepository.count();

        return new DashboardResponse(
                totalStudents,
                totalRooms,
                occupiedRooms,
                totalRevenue == null ? 0.0 : totalRevenue,
                totalComplaints,
                resolvedComplaints,
                totalAttendance
        );
    }
}
