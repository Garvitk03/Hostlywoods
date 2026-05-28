package com.hostlywoods.backend.service;

import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.entity.Visitor;
import com.hostlywoods.backend.repository.StudentRepository;
import com.hostlywoods.backend.repository.VisitorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class VisitorService {
    @Autowired
    private VisitorRepository visitorRepository;

    @Autowired
    private StudentRepository studentRepository;

    public Visitor addVisitor(
            Long studentId,
            Visitor visitor
    ) {

        Student student = studentRepository.findById(
                studentId
        ).orElseThrow(() ->
                new RuntimeException("Student not found"));

        visitor.setStudent(student);
        visitor.setEntryTime(LocalDateTime.now());

        return visitorRepository.save(visitor);
    }

    public List<Visitor> getAllVisitors() {

        return visitorRepository.findAll();
    }

    public Visitor approveVisitor(Long visitorId) {

        Visitor visitor = visitorRepository.findById(
                visitorId
        ).orElseThrow(() ->
                new RuntimeException("Visitor not found"));

        visitor.setApproved(true);

        return visitorRepository.save(visitor);
    }
}
