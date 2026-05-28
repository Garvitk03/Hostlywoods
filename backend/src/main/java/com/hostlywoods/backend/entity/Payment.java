package com.hostlywoods.backend.entity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double amount;

    private String paymentType;

    private String status = "PENDING";

    private LocalDateTime paymentDate;

    @ManyToOne
    private Student student;
}
