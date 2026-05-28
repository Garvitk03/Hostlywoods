package com.hostlywoods.backend.controller;

import com.hostlywoods.backend.entity.Visitor;
import com.hostlywoods.backend.service.VisitorService;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/visitors")
@CrossOrigin("*")
@Tag(
        name = "Student APIs",
        description = "Manage hostel students"
)
public class VisitorController {
    @Autowired
    private VisitorService visitorService;

    @PostMapping("/{studentId}")
    public Visitor addVisitor(
            @PathVariable Long studentId,
            @RequestBody Visitor visitor
    ) {

        return visitorService.addVisitor(
                studentId,
                visitor
        );
    }

    @GetMapping
    public List<Visitor> getAllVisitors() {

        return visitorService.getAllVisitors();
    }

    @PutMapping("/approve/{visitorId}")
    public Visitor approveVisitor(
            @PathVariable Long visitorId
    ) {

        return visitorService.approveVisitor(visitorId);
    }
}
