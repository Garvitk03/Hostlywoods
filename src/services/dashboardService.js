import axios from "axios";

const BASE_URL = "http://localhost:8080/api/dashboard";

const token = localStorage.getItem("token");

export const getDashboardData = async () => {

    return await axios.get(
        `${BASE_URL}/analytics`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};