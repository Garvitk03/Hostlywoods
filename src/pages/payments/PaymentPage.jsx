import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { toast } from "react-toastify";

function PaymentPage() {

    const [payments, setPayments] = useState([]);
    const [revenue, setRevenue] = useState(0);

    const [studentId, setStudentId] = useState("");
    const [amount, setAmount] = useState("");
    const [paymentType, setPaymentType] = useState("");

    const [loading, setLoading] = useState(false);

    // =========================
    // FETCH PAYMENTS
    // =========================

    const fetchPayments = useCallback(async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:8080/api/payments",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setPayments(response.data);

        } catch (error) {

            console.log(error);

            toast.error("Failed to fetch payments");
        }

    }, []);

    // =========================
    // FETCH REVENUE
    // =========================

    const fetchRevenue = useCallback(async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:8080/api/payments/revenue",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setRevenue(response.data);

        } catch (error) {

            console.log(error);

            toast.error("Failed to fetch revenue");
        }

    }, []);

    // =========================
    // LOAD DATA
    // =========================

    useEffect(() => {


    }, [fetchPayments, fetchRevenue]);

    // =========================
    // CREATE PAYMENT
    // =========================

    const createPayment = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:8080/api/payments",
                {
                    studentId,
                    amount,
                    paymentType
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success("Payment Added Successfully");

            setStudentId("");
            setAmount("");
            setPaymentType("");

            fetchPayments();
            fetchRevenue();

        } catch (error) {

            console.log(error);

            toast.error("Failed to create payment");

        } finally {

            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h1>Payment Management</h1>

            <h2>Total Revenue: ₹{revenue}</h2>

            <form onSubmit={createPayment}>

                <input
                    type="number"
                    placeholder="Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Payment Type"
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                    required
                />

                <br /><br />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Add Payment"}
                </button>

            </form>

            <hr />

            <h2>Payment History</h2>

            <table border="1" cellPadding="10">

                <thead>

                <tr>
                    <th>ID</th>
                    <th>Student</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Status</th>
                </tr>

                </thead>

                <tbody>

                {payments.map((payment) => (

                    <tr key={payment.id}>

                        <td>{payment.id}</td>

                        <td>
                            {payment.student?.name}
                        </td>

                        <td>
                            ₹{payment.amount}
                        </td>

                        <td>
                            {payment.paymentType}
                        </td>

                        <td>
                            {payment.status}
                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default PaymentPage;