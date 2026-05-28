package com.hostlywoods.backend.controller;

import com.hostlywoods.backend.dto.*;
import com.hostlywoods.backend.service.AuthService;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
@Tag(
        name = "Student APIs",
        description = "Manage hostel students"
)
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public AuthResponse register(
            @RequestBody RegisterRequest request
    ) {

        String token = authService.register(request);

        return new AuthResponse(token);
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request
    ) {

        String token = authService.login(request);

        return new AuthResponse(token);
    }
}
