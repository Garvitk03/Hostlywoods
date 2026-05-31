import axios from "axios";

const API = "http://localhost:8080/api/attendance";

const token = localStorage.getItem("token");

const authHeader = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};

export const generateQR = async (studentId) => {

    return axios.post(
        `${API}/generate/${studentId}`,
        {},
        authHeader
    );
};

export const markAttendance = async (qrCode) => {

    return axios.post(
        `${API}/scan`,
        {
            qrCode
        },
        authHeader
    );
};

export const getAttendanceLogs = async () => {

    return axios.get(
        `${API}/logs`,
        authHeader
    );
};

export const getDailyAttendance = async () => {

    return axios.get(
        `${API}/daily`,
        authHeader
    );
};
