import { useState } from "react";
import { generateQR } from "../../services/attendanceService";

function GenerateQR() {

    const [studentId, setStudentId] = useState("");
    const [qrData, setQrData] = useState("");

    const handleGenerate = async () => {

        try {

            const response = await generateQR(studentId);

            setQrData(response.data.qrCode);

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div>

            <h2>Generate QR</h2>

            <input
                type="number"
                placeholder="Enter Student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
            />

            <button onClick={handleGenerate}>
                Generate
            </button>

            {qrData && (
                <div>
                    <h3>Generated QR Data:</h3>
                    <p>{qrData}</p>
                </div>
            )}

        </div>
    );
}

export default GenerateQR;