package com.hostlywoods.backend.service;

import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // REGISTER
    public Student registerStudent(Student student) {

        student.setPassword(
                passwordEncoder.encode(student.getPassword())
        );

        return studentRepository.save(student);
    }

    // GET ALL STUDENTS
    public List<Student> getAllStudents() {

        return studentRepository.findAll();
    }

    // LOGIN
    public Student loginStudent(String email, String password) {

        Student student = studentRepository.findByEmail(email);

        if (student == null) {
            throw new RuntimeException("Student not found");
        }

        if (!passwordEncoder.matches(password, student.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return student;
    }

    public Student saveStudent(Student student) {
        return student;
    }

    public void deleteStudent(Long id) {
    }
}