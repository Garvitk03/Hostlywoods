package com.hostlywoods.backend.dto;

import lombok.Data;

@Data
public class PaymentRequest {
    private Long studentId;

    private Double amount;

    private String paymentType;
}
