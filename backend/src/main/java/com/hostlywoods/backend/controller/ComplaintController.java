package com.hostlywoods.backend.controller;

import com.hostlywoods.backend.dto.ComplaintRequest;
import com.hostlywoods.backend.entity.Complaint;
import com.hostlywoods.backend.service.ComplaintService;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
@CrossOrigin("*")
@Tag(
        name = "Student APIs",
        description = "Manage hostel students"
)
public class ComplaintController {
    @Autowired
    private ComplaintService complaintService;

    @PostMapping
    public Complaint createComplaint(
            @RequestBody ComplaintRequest request
    ) {

        return complaintService.createComplaint(request);
    }

    @GetMapping
    public List<Complaint> getAllComplaints() {

        return complaintService.getAllComplaints();
    }

    @PutMapping("/{id}")
    public Complaint updateComplaintStatus(
            @PathVariable Long id,
            @RequestParam String status
    ) {

        return complaintService.updateComplaintStatus(
                id,
                status
        );
    }
}
