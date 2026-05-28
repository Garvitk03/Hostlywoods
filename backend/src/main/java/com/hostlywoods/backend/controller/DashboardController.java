package com.hostlywoods.backend.controller;

import com.hostlywoods.backend.dto.DashboardResponse;

import com.hostlywoods.backend.service.DashboardService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/dashboard")

@CrossOrigin("*")

public class DashboardController {
    @Autowired
    private DashboardService dashboardService;

    @GetMapping
    public DashboardResponse getAnalytics() {

        return dashboardService.getDashboardAnalytics();
    }
}
