import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import { markAttendance } from "../../services/attendanceService";

function ScanQR() {

    useEffect(() => {

        const scanner = new Html5QrcodeScanner(
            "reader",
            {
                fps: 10,
                qrbox:{width: 250, height: 250}
            },
            false
        );

        scanner.render(
            async (decodedText) => {

                try {

                    await markAttendance(decodedText);

                    alert("Attendance Marked");

                } catch (error) {

                    console.log(error);
                }

            },
            (error) => {
                console.log(error);
            }
        );

    }, []);

    return (
        <div>

            <h2>Scan QR Attendance</h2>

            <div id="reader"></div>

        </div>
    );
}

export default ScanQR;