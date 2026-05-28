package com.hostlywoods.backend.service;

import com.hostlywoods.backend.dto.PaymentRequest;
import com.hostlywoods.backend.entity.Payment;
import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.repository.PaymentRepository;
import com.hostlywoods.backend.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private EmailService emailService;

    // CREATE PAYMENT
    public Payment createPayment(
            PaymentRequest request
    ) {

        Student student = studentRepository.findById(
                request.getStudentId()
        ).orElseThrow(() ->
                new RuntimeException("Student not found"));

        Payment payment = new Payment();

        payment.setStudent(student);
        payment.setAmount(request.getAmount());
        payment.setPaymentType(request.getPaymentType());

        payment.setPaymentDate(LocalDateTime.now());

        payment.setStatus("PAID");

        Payment savedPayment =
                paymentRepository.save(payment);

        emailService.sendEmail(
                student.getEmail(),
                "Payment Successful",
                "Your hostel payment has been received successfully."
        );

        return savedPayment;
    }

    // GET ALL PAYMENTS
    public List<Payment> getAllPayments() {

        return paymentRepository.findAll();
    }

    // GET TOTAL REVENUE
    public Double getTotalRevenue() {

        List<Payment> payments = paymentRepository.findAll();

        double total = 0;

        for (Payment payment : payments) {

            if (payment.getStatus().equals("PAID")) {

                total += payment.getAmount();
            }
        }

        return total;
    }
}
