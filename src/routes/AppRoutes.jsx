import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/LoginPage";
import DashboardPage from "../pages/dashboard/DashboardPage";

import Rooms from "../pages/rooms/RoomPage";
import AddRoom from "../pages/rooms/AddRoom";
import UpdateRoom from "../pages/rooms/UpdateRoom";
import DeleteRoom from "../pages/rooms/DeleteRoom";

import Complaints from "../pages/complaints/ComplaintPage";
import AddComplaint from "../pages/complaints/AddComplaint";

import Payments from "../pages/payments/PaymentPage";
import CreatePayment from "../pages/payments/CreatePayment";

import GenerateQR from "../pages/attendance/GenerateQR";
import ScanQR from "../pages/attendance/ScanQR";
import AttendanceLogs from "../pages/attendance/AttendanceLogs";
import DailyAttendance from "../pages/attendance/DailyAttendance";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* AUTH */}

                <Route path="/" element={<Login />} />

                {/* DASHBOARD */}

                <Route path="/dashboard" element={<DashboardPage />} />

                {/* ROOM MANAGEMENT */}

                <Route path="/rooms" element={<Rooms />} />

                <Route path="/add-room" element={<AddRoom />} />

                <Route path="/update-room/:id" element={<UpdateRoom />} />

                <Route path="/delete-room/:id" element={<DeleteRoom />} />

                {/* COMPLAINT MANAGEMENT */}

                <Route path="/complaints" element={<Complaints />} />

                <Route path="/add-complaint" element={<AddComplaint />} />

                {/* PAYMENT MANAGEMENT */}

                <Route path="/payments" element={<Payments />} />

                <Route path="/create-payment" element={<CreatePayment />} />

                {/* QR ATTENDANCE */}

                <Route path="/generate-qr" element={<GenerateQR />} />

                <Route path="/scan-qr" element={<ScanQR />} />

                <Route path="/attendance-logs" element={<AttendanceLogs />} />

                <Route path="/daily-attendance" element={<DailyAttendance />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
