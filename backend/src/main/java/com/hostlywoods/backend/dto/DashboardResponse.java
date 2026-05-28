package com.hostlywoods.backend.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class DashboardResponse {

    private Long totalStudents;

    private Long totalRooms;

    private Long occupiedRooms;

    private Double totalRevenue;

    private Long totalComplaints;

    private Long resolvedComplaints;

    private Long totalAttendance;
}
