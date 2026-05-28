package com.hostlywoods.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Visitor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String visitorName;

    private String phone;

    private LocalDateTime entryTime;

    private LocalDateTime exitTime;

    private boolean approved = false;

    @ManyToOne
    private Student student;
}
