package com.hostlywoods.backend.repository;

import com.hostlywoods.backend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long>{
    Optional<Student> findByEmailOrPhone(String email, String phone);
}
