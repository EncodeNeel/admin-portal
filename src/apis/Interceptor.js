import axios from "axios";

const baseURL = "http://127.0.0.1:5000";

const api = axios.create({
  baseURL,
});

export const getAllPrescriptions = async () => {
  try {
    const response = await api.get('/all_prescriptions');
    return response.data;
  } catch (error) {
    console.error('Error getting all prescriptions:', error.message);
    throw error;
  }
};
