package com.hostlywoods.backend.service;

import com.hostlywoods.backend.dto.ComplaintRequest;
import com.hostlywoods.backend.entity.Complaint;
import com.hostlywoods.backend.entity.Student;
import com.hostlywoods.backend.repository.ComplaintRepository;
import com.hostlywoods.backend.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintService {
    @Autowired
    private ComplaintRepository complaintRepository;

    @Autowired
    private StudentRepository studentRepository;

    public Complaint createComplaint(ComplaintRequest request) {

        Student student = studentRepository.findById(
                request.getStudentId()
        ).orElseThrow(() ->
                new RuntimeException("Student not found"));

        Complaint complaint = new Complaint();

        complaint.setTitle(request.getTitle());
        complaint.setDescription(request.getDescription());
        complaint.setStudent(student);

        return complaintRepository.save(complaint);
    }

    public List<Complaint> getAllComplaints() {

        return complaintRepository.findAll();
    }

    public Complaint updateComplaintStatus(
            Long complaintId,
            String status
    ) {

        Complaint complaint = complaintRepository.findById(
                complaintId
        ).orElseThrow(() ->
                new RuntimeException("Complaint not found"));

        complaint.setStatus(status);

        return complaintRepository.save(complaint);
    }
}
