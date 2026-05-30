import { useState } from "react";

import axios from "axios";

import {
    successToast,
    errorToast
} from "../../utils/toast";

function AddRoom() {

    const [room, setRoom] = useState({

        roomNumber: "",
        type: "",
        price: "",
        capacity: ""
    });

    const handleChange = (e) => {

        setRoom({

            ...room,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token =
                localStorage.getItem("token");

            await axios.post(

                "http://localhost:8080/api/rooms",

                room,

                {
                    headers: {

                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            successToast(
                "Room Added Successfully"
            );

            setRoom({

                roomNumber: "",
                type: "",
                price: "",
                capacity: ""
            });

        } catch (error) {

            console.log(error);

            errorToast(
                "Failed To Add Room"
            );
        }
    };

    return (

        <div style={{ padding: "20px" }}>

            <h1>Add Room</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="roomNumber"
                    placeholder="Room Number"
                    value={room.roomNumber}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="type"
                    placeholder="Room Type"
                    value={room.type}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={room.price}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="number"
                    name="capacity"
                    placeholder="Capacity"
                    value={room.capacity}
                    onChange={handleChange}
                />

                <br /><br />

                <button type="submit">

                    Add Room

                </button>

            </form>

        </div>
    );
}

export default AddRoom;