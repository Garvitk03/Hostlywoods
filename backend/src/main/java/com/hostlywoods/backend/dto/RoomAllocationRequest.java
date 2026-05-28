package com.hostlywoods.backend.dto;

import lombok.Data;

@Data
public class RoomAllocationRequest {

    private Long studentId;
    private Long roomId;
}