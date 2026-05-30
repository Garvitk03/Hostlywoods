import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import LogoutButton from "../../components/LogoutButton";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    PieChart,
    Pie,
    Cell
} from "recharts";

import { getDashboardData } from "../../services/dashboardService";

function DashboardPage() {

    const [dashboard, setDashboard] = useState({});

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const response = await getDashboardData();

                setDashboard(response.data);

            } catch (error) {

                console.log(error);
            }
        };

        loadDashboard();

    }, []);

    const chartData = [
        {
            name: "Students",
            value: dashboard.totalStudents || 0
        },
        {
            name: "Rooms",
            value: dashboard.totalRooms || 0
        },
        {
            name: "Complaints",
            value: dashboard.totalComplaints || 0
        },
        {
            name: "Attendance",
            value: dashboard.attendanceCount || 0
        }
    ];

    const cardStyle = {
        background: "#ffffff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        textAlign: "center",
        width: "220px"
    };

    return (

        <div>

            <Navbar />

            <div
                style={{
                    display: "flex"
                }}
            >

                <Sidebar />

                <div
                    style={{
                        padding: "20px",
                        width: "100%",
                        backgroundColor: "#f4f6f9",
                        minHeight: "100vh"
                    }}
                >

                    <h1>HostlyWoods Dashboard</h1>

                    <br />

                    <LogoutButton />

                    {/* DASHBOARD CARDS */}

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                            marginTop: "30px"
                        }}
                    >

                        <div style={cardStyle}>
                            <h3>Total Students</h3>
                            <h2>{dashboard.totalStudents || 0}</h2>
                        </div>

                        <div style={cardStyle}>
                            <h3>Total Rooms</h3>
                            <h2>{dashboard.totalRooms || 0}</h2>
                        </div>

                        <div style={cardStyle}>
                            <h3>Total Revenue</h3>
                            <h2>₹ {dashboard.totalRevenue || 0}</h2>
                        </div>

                        <div style={cardStyle}>
                            <h3>Total Complaints</h3>
                            <h2>{dashboard.totalComplaints || 0}</h2>
                        </div>

                    </div>

                    {/* BAR CHART */}

                    <div
                        style={{
                            marginTop: "50px",
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                        }}
                    >

                        <h2>Analytics Overview</h2>

                        <BarChart
                            width={700}
                            height={300}
                            data={chartData}
                        >

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="value"
                                fill="#8884d8"
                            />

                        </BarChart>

                    </div>

                    {/* PIE CHART */}

                    <div
                        style={{
                            marginTop: "50px",
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                        }}
                    >

                        <h2>Attendance Analytics</h2>

                        <PieChart
                            width={400}
                            height={400}
                        >

                            <Pie
                                data={chartData}
                                dataKey="value"
                                outerRadius={120}
                                label
                            >

                                <Cell fill="#0088FE" />
                                <Cell fill="#00C49F" />
                                <Cell fill="#FFBB28" />
                                <Cell fill="#FF8042" />

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DashboardPage;