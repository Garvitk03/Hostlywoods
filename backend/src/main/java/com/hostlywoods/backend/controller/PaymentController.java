package com.hostlywoods.backend.controller;

import com.hostlywoods.backend.dto.PaymentRequest;
import com.hostlywoods.backend.entity.Payment;
import com.hostlywoods.backend.service.PaymentService;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin("*")
@Tag(
        name = "Student APIs",
        description = "Manage hostel students"
)
public class PaymentController {
    @Autowired
    private PaymentService paymentService;

    // CREATE PAYMENT
    @PostMapping
    public Payment createPayment(
            @RequestBody PaymentRequest request
    ) {

        return paymentService.createPayment(request);
    }

    // GET ALL PAYMENTS
    @GetMapping
    public List<Payment> getAllPayments() {

        return paymentService.getAllPayments();
    }

    // TOTAL REVENUE
    @GetMapping("/revenue")
    public Double getTotalRevenue() {

        return paymentService.getTotalRevenue();
    }
}
