package com.hostlywoods.backend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@RequestMapping("/api/files")
public class FileController {

    @Value("${file.upload-dir}")
    private String uploadDir;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(
            @RequestParam("file") MultipartFile file
    ) {

        try {

            File dir = new File(uploadDir);

            if (!dir.exists()) {
                dir.mkdirs();
            }

            String filePath =
                    System.getProperty("user.dir")
                            + File.separator
                            + uploadDir
                            + File.separator
                            + file.getOriginalFilename();

            File destination = new File(filePath);

            file.transferTo(destination);

            return ResponseEntity.ok("File uploaded successfully");

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity.internalServerError()
                    .body("Upload Failed: " + e.getMessage());
        }
    }
}