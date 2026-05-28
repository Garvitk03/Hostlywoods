package com.hostlywoods.backend.controller;

import com.hostlywoods.backend.dto.QRRequest;
import com.hostlywoods.backend.service.QRService;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/qr")

@CrossOrigin("*")
@Tag(
        name = "Student APIs",
        description = "Manage hostel students"
)

public class QRController {

    @Autowired
    private QRService qrService;

    @PostMapping("/generate")
    public String generateQR(
            @RequestBody QRRequest request
    ) {

        return qrService.generateQR(request);
    }
}