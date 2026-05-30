import { useEffect, useState } from "react";

import API from "../../api/axiosConfig";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function RoomPage() {

    const [rooms, setRooms] = useState([]);

    const [editingId, setEditingId] = useState(null);

    const [roomData, setRoomData] = useState({
        roomNumber: "",
        type: "",
        price: "",
        capacity: "",
        occupiedCount: 0,
        occupied: false
    });

    // FETCH ROOMS
    const fetchRooms = async () => {

        try {

            const response = await API.get("/rooms");

            setRooms(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    // LOAD ROOMS
    useEffect(() => {

        const loadRooms = async () => {

            try {

                const response =
                    await API.get("/rooms");

                setRooms(response.data);

            } catch (error) {

                console.log(error);
            }
        };

        loadRooms();

    }, []);

    // HANDLE INPUT
    const handleChange = (e) => {

        const { name, value } = e.target;

        setRoomData({
            ...roomData,
            [name]: value
        });
    };

    // RESET FORM
    const resetForm = () => {

        setRoomData({
            roomNumber: "",
            type: "",
            price: "",
            capacity: "",
            occupiedCount: 0,
            occupied: false
        });

        setEditingId(null);
    };

    // ADD ROOM
    const handleAddRoom = async (e) => {

        e.preventDefault();

        try {

            await API.post(
                "/rooms",
                roomData
            );

            alert("Room Added Successfully");

            resetForm();

            fetchRooms();

        } catch (error) {

            console.log(error);

            alert("Failed To Add Room");
        }
    };

    // DELETE ROOM
    const handleDeleteRoom = async (id) => {

        try {

            await API.delete(`/rooms/${id}`);

            alert("Room Deleted");

            fetchRooms();

        } catch (error) {

            console.log(error);

            alert("Delete Failed");
        }
    };

    // EDIT ROOM
    const handleEditRoom = (room) => {

        setEditingId(room.id);

        setRoomData({
            roomNumber: room.roomNumber || "",
            type: room.type || "",
            price: room.price || "",
            capacity: room.capacity || "",
            occupiedCount: room.occupiedCount || 0,
            occupied: room.occupied || false
        });
    };

    // UPDATE ROOM
    const handleUpdateRoom = async (e) => {

        e.preventDefault();

        try {

            await API.put(
                `/rooms/${editingId}`,
                roomData
            );

            alert("Room Updated Successfully");

            resetForm();

            fetchRooms();

        } catch (error) {

            console.log(error);

            alert("Update Failed");
        }
    };

    return (

        <div>

            <Navbar />

            <div style={{ display: "flex" }}>

                <Sidebar />

                <div
                    style={{
                        padding: "20px",
                        width: "100%"
                    }}
                >

                    <h1>Room Management</h1>

                    <br />

                    {/* FORM */}

                    <form
                        onSubmit={
                            editingId
                                ? handleUpdateRoom
                                : handleAddRoom
                        }
                    >

                        <input
                            type="text"
                            name="roomNumber"
                            placeholder="Room Number"
                            value={roomData.roomNumber}
                            onChange={handleChange}
                        />

                        <br /><br />

                        <input
                            type="text"
                            name="type"
                            placeholder="Room Type"
                            value={roomData.type}
                            onChange={handleChange}
                        />

                        <br /><br />

                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={roomData.price}
                            onChange={handleChange}
                        />

                        <br /><br />

                        <input
                            type="number"
                            name="capacity"
                            placeholder="Capacity"
                            value={roomData.capacity}
                            onChange={handleChange}
                        />

                        <br /><br />

                        <button type="submit">

                            {
                                editingId
                                    ? "Update Room"
                                    : "Add Room"
                            }

                        </button>

                    </form>

                    <br />
                    <hr />
                    <br />

                    {/* ROOM TABLE */}

                    <table
                        border="1"
                        cellPadding="10"
                    >

                        <thead>

                        <tr>

                            <th>ID</th>
                            <th>Room</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Capacity</th>
                            <th>Actions</th>

                        </tr>

                        </thead>

                        <tbody>

                        {

                            rooms.length > 0 ? (

                                rooms.map((room) => (

                                    <tr key={room.id}>

                                        <td>{room.id}</td>

                                        <td>{room.roomNumber}</td>

                                        <td>{room.type}</td>

                                        <td>{room.price}</td>

                                        <td>{room.capacity}</td>

                                        <td>

                                            <button
                                                onClick={() =>
                                                    handleEditRoom(room)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDeleteRoom(room.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                ))

                            ) : (

                                <tr>

                                    <td colSpan="6">
                                        No Rooms Found
                                    </td>

                                </tr>
                            )
                        }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default RoomPage;