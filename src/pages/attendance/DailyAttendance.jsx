import { useEffect, useState } from "react";
import axios from "axios";

function DailyAttendance() {

    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);

    const API = "http://localhost:8080/api/attendance/today";

    useEffect(() => {

        const fetchAttendance = async () => {

            try {

                const response = await axios.get(API);

                console.log(response.data);

                setAttendance(response.data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        };

        fetchAttendance();

    }, []);

    if (loading) {

        return <h2>Loading...</h2>;
    }

    return (

        <div>

            <h2>Today's Attendance</h2>

            <table border="1">

                <thead>

                <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Attendance Time</th>
                </tr>

                </thead>

                <tbody>

                {attendance.map((item) => (

                    <tr key={item.id}>

                        <td>{item.id}</td>

                        <td>{item.student?.name}</td>

                        <td>{item.student?.email}</td>

                        <td>{item.attendanceTime}</td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default DailyAttendance;