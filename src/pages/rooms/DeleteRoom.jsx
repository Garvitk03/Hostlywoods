import axios from 'axios'
import { successToast, errorToast } from '../../utils/toast';
import { getAllRooms } from "../../services/roomService";

const deleteRoom = async (id) => {

    try {

        await axios.delete(
            `http://localhost:8080/api/rooms/${id}`,
            {
                headers: {
                    Authorization:
                        `Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        successToast(
            "Room Deleted Successfully"
        );

        getAllRooms();

    } catch (error) {

        console.log(error);

        errorToast(
            "Failed To Delete Room"
        );
    }
};
export default deleteRoom;
