package com.hostlywoods.backend.service;

import com.hostlywoods.backend.dto.*;
import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.repository.StudentRepository;
import com.hostlywoods.backend.security.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service

public class AuthService {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public String register(RegisterRequest request) {

        Student student = new Student();

        student.setName(request.getName());
        student.setEmail(request.getEmail());
        student.setPhone(request.getPhone());

        student.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        student.setRole("STUDENT");

        studentRepository.save(student);

        return jwtService.generateToken(student.getEmail());
    }

    public String login(LoginRequest request) {

        Student student = studentRepository.findByEmailOrPhone(
                request.getEmailOrPhone(), request.getEmailOrPhone()
                ).orElseThrow();

        boolean passwordMatch =
                passwordEncoder.matches(
                        request.getPassword(),
                        student.getPassword()
                );

        if (!passwordMatch) {
            throw new RuntimeException("Invalid Password");
        }

        return jwtService.generateToken(student.getEmail());
    }
}
