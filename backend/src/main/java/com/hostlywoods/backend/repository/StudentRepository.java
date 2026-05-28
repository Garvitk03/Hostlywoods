package com.hostlywoods.backend.repository;

import com.hostlywoods.backend.entity.Student;

import com.hostlywoods.backend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

    long count();
    Student findByEmail(String email);
}
