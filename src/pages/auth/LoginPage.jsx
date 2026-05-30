import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import Loader from "../../components/Loader";

import {
    successToast,
    errorToast
} from "../../components/ToastMessage";

function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [loginData, setLoginData] = useState({

        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setLoginData({

            ...loginData,

            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await axios.post(

                "http://localhost:8080/api/auth/login",

                loginData
            );

            // STORE JWT TOKEN

            localStorage.setItem(

                "token",

                response.data.token
            );

            // STORE USER DATA

            localStorage.setItem(

                "user",

                JSON.stringify(response.data.user)
            );

            // SUCCESS TOAST

            successToast(
                "Login Successful"
            );

            // ROLE BASED NAVIGATION

            if (

                response.data.user.role === "ADMIN"

            ) {

                navigate("/admin-dashboard");

            } else {

                navigate("/student-dashboard");
            }

        } catch (error) {

            console.log(error);

            errorToast(
                "Invalid Credentials"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f1f5f9"
            }}
        >

            <div
                style={{
                    background: "#ffffff",
                    padding: "40px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    width: "350px"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "30px"
                    }}
                >
                    HostlyWoods Login
                </h1>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={loginData.email}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginBottom: "20px",
                            borderRadius: "8px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginBottom: "20px",
                            borderRadius: "8px",
                            border: "1px solid #ccc"
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px",
                            border: "none",
                            borderRadius: "8px",
                            backgroundColor: "#2563eb",
                            color: "white",
                            fontSize: "16px",
                            cursor: "pointer"
                        }}
                    >

                        Login

                    </button>

                </form>

                {/* LOADING SPINNER */}

                {

                    loading && <Loader />
                }

            </div>

        </div>
    );
}

export default Login;