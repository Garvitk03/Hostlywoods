import { useState } from "react";

import axios from "axios";

import { successToast, errorToast } from "../../utils/toast";
function AddRoomPage() {

    // STATES

    const [roomNumber, setRoomNumber] = useState("");
    const [capacity, setCapacity] = useState("");
    const [price, setPrice] = useState("");
    const [loading, setLoading] = useState(false);

    // HANDLE SUBMIT FUNCTION

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!roomNumber || !capacity || !price) {

            errorToast("All fields are required");
            return;
        }

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            await axios.post(
                "http://localhost:8080/api/rooms",
                {
                    roomNumber,
                    capacity,
                    price
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            successToast("Room Added Successfully");

            setRoomNumber("");
            setCapacity("");
            setPrice("");

        } catch (error) {

            console.log(error);

            if (error.response) {

                errorToast(
                    error.response.data.message || "Failed to add room"
                );

            } else {

                errorToast("Server not responding");
            }

        } finally {

            setLoading(false);
        }
    };

    return (

        <div>

            <h2>Add Room</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Room Number"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="number"
                    placeholder="Capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">

                    {loading ? "Adding..." : "Add Room"}

                </button>

            </form>

        </div>
    );
}

export default AddRoomPage;