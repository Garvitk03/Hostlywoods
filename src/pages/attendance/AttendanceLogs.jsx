import { useEffect, useState } from "react";
import axios from "axios";

function AttendanceLogs() {

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const API = "http://localhost:8080/api/attendance/all";

    useEffect(() => {

        const fetchLogs = async () => {

            try {

                const response = await axios.get(API);

                console.log(response.data);

                setLogs(response.data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        };

        fetchLogs();

    }, []);

    if (loading) {

        return <h2>Loading...</h2>;
    }

    return (

        <div>

            <h2>Attendance Logs</h2>

            <table border="1">

                <thead>

                <tr>
                    <th>ID</th>
                    <th>Student</th>
                    <th>Time</th>
                </tr>

                </thead>

                <tbody>

                {logs.map((log) => (

                    <tr key={log.id}>

                        <td>{log.id}</td>

                        <td>{log.student?.name}</td>

                        <td>{log.attendanceTime}</td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default AttendanceLogs;