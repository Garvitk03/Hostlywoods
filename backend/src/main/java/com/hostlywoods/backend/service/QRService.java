package com.hostlywoods.backend.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.qrcode.QRCodeWriter;
import com.hostlywoods.backend.dto.QRRequest;
import com.hostlywoods.backend.entity.Attendance;
import com.hostlywoods.backend.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service

public class QRService {

    @Autowired
    private AttendanceRepository attendanceRepository;

    public String generateQR(QRRequest request) {

        try {

            String qrText =
                    request.getStudentId()
                            + ":" +
                            request.getStudentName();

            QRCodeWriter qrCodeWriter = new QRCodeWriter();

            qrCodeWriter.encode(
                    qrText,
                    BarcodeFormat.QR_CODE,
                    300,
                    300
            );

            Attendance attendance = new Attendance();

            attendance.setStudentId(request.getStudentId());

            attendance.setStudentName(request.getStudentName());

            attendance.setScanTime(LocalDateTime.now());

            attendance.setStatus("PRESENT");

            attendanceRepository.save(attendance);

            return "QR Generated Successfully";

        } catch (Exception e) {

            throw new RuntimeException(e);
        }
    }
}