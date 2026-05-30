import { useState } from "react";

import axios from "axios";

import {
    successToast,
    errorToast
} from "../../utils/toast";

function UpdateRoom() {

    const [roomId, setRoomId] = useState("");

    const [roomNumber, setRoomNumber] = useState("");

    const [capacity, setCapacity] = useState("");

    const [price, setPrice] = useState("");

    const handleUpdateRoom = async () => {

        try {

            const roomData = {

                roomNumber,
                capacity,
                price
            };

            await axios.put(

                `http://localhost:8080/api/rooms/${roomId}`,

                roomData,

                {
                    headers: {
                        Authorization:
                            `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );

            successToast(
                "Room Updated Successfully"
            );

            setRoomId("");
            setRoomNumber("");
            setCapacity("");
            setPrice("");

        } catch (error) {

            console.log(error);

            errorToast(
                "Update Failed"
            );
        }
    };

    return (

        <div
            style={{
                padding: "20px"
            }}
        >

            <h2>
                Update Room
            </h2>

            <input
                type="text"
                placeholder="Room ID"
                value={roomId}
                onChange={(e) =>
                    setRoomId(e.target.value)
                }
            />

            <br /><br />

            <input
                type="text"
                placeholder="Room Number"
                value={roomNumber}
                onChange={(e) =>
                    setRoomNumber(e.target.value)
                }
            />

            <br /><br />

            <input
                type="number"
                placeholder="Capacity"
                value={capacity}
                onChange={(e) =>
                    setCapacity(e.target.value)
                }
            />

            <br /><br />

            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) =>
                    setPrice(e.target.value)
                }
            />

            <br /><br />

            <button
                onClick={handleUpdateRoom}
            >
                Update Room
            </button>

        </div>
    );
}

export default UpdateRoom;