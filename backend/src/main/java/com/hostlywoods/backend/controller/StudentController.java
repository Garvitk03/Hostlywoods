package com.hostlywoods.backend.controller;
import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.service.StudentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")

@Tag(
        name = "Student APIs",
        description = "Manage hostel students"
)
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Operation(summary = "Add new student")
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return studentService.saveStudent(student);
    }

    @Operation(summary = "Get all students")
    @GetMapping
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    @Operation(summary = "Delete student by ID")
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return "Student deleted successfully";
    }
}