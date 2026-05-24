package com.hostlywoods.backend.controller;

import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.service.StudentService;
import com.hostlywoods.backend.dto.LoginRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin("*")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/register")
    public Student registerStudent(@RequestBody Student student) {
        return studentService.registerStudent(student);
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }
    @PostMapping("/login")
    public Student loginStudent(@RequestBody LoginRequest request) {

        return studentService.loginStudent(
                request.getEmailOrPhone(),
                request.getPassword()
        );
    }
}
