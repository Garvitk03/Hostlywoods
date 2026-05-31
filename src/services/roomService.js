import axios from "axios";

const API = "http://localhost:8080/api/rooms";

export const getAllRooms = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const deleteRoom = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};
