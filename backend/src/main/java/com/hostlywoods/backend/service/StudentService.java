package com.hostlywoods.backend.service;

import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student registerStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    public Student loginStudent(String emailOrPhone, String password) {

        Student student = studentRepository.findByEmailOrPhone(emailOrPhone,emailOrPhone)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        if (!student.getPassword().equals(password)) {
            throw new RuntimeException("Invalid Password");
        }

        return student;
    }
}
