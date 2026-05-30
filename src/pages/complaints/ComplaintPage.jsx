import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import {
    successToast,
    errorToast
} from "../../utils/toast";

const ComplaintPage = () => {

    const [complaints, setComplaints] = useState([]);

    const [loading, setLoading] = useState(true);

    // =========================
    // FETCH COMPLAINTS
    // =========================
    const fetchComplaints = useCallback(async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:8080/api/complaints",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setComplaints(response.data);

        } catch (error) {

            console.error(error);

            errorToast("Failed to load complaints");

        } finally {

            setLoading(false);
        }

    }, []);

    // =========================
    // USE EFFECT
    // =========================
    useEffect(() => {

        let mounted = true;

        const loadData = async () => {

            if (mounted) {

                await fetchComplaints();
            }
        };

        loadData();

        return () => {

            mounted = false;
        };

    }, [fetchComplaints]);

    // =========================
    // RESOLVE COMPLAINT
    // =========================
    const resolveComplaint = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await axios.put(
                `http://localhost:8080/api/complaints/${id}/resolve`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            successToast("Complaint resolved successfully");

            fetchComplaints();

        } catch (error) {

            console.error(error);

            errorToast("Failed to resolve complaint");
        }
    };

    // =========================
    // LOADING UI
    // =========================
    if (loading) {

        return (

            <div
                style={{
                    padding: "20px"
                }}
            >
                <h2>Loading complaints...</h2>
            </div>
        );
    }

    // =========================
    // UI
    // =========================
    return (

        <div
            style={{
                padding: "20px"
            }}
        >

            <h1>Complaint Management</h1>

            <br />

            {complaints.length === 0 ? (

                <p>No complaints found</p>

            ) : (

                complaints.map((complaint) => (

                    <div
                        key={complaint.id}
                        style={{
                            border: "1px solid gray",
                            padding: "15px",
                            marginBottom: "10px",
                            borderRadius: "10px",
                        }}
                    >

                        <h3>{complaint.title}</h3>

                        <p>{complaint.description}</p>

                        <p>
                            <strong>Status:</strong> {complaint.status}
                        </p>

                        {complaint.status !== "RESOLVED" && (

                            <button
                                onClick={() =>
                                    resolveComplaint(complaint.id)
                                }
                            >
                                Resolve
                            </button>
                        )}

                    </div>
                ))
            )}

        </div>
    );
};

export default ComplaintPage;