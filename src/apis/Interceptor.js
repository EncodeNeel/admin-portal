import axios from "axios";

const baseURL = "http://127.0.0.1:5000";
const nhsURL = "https://api.nhs.uk";

const api = axios.create({
  baseURL,
});

const nhsApi = axios.create({
  baseURL: nhsURL,  
  headers: {
    'subscription-key': '269022c01f1249d3bad1ca51fd2d519f',
  },
});

export const getAllPrescriptions = async () => {
  try {
    const response = await api.get('/all_prescriptions');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error getting all prescriptions:', error.message);
    throw error;
  }
};

export const getAllOrdersByPharmacyName = async () => {
  try {
    const response = await api.get("/orders_by_pharmacy?pharmacy_name=Pharmacy C");
    return response.data;
  }
  catch (error) {
    console.error("Error getting all orders",error.message);
    throw error;
  }
}

export const getAllMedicines = async (category) => {
  try {
    const url = category ? `/medicines?category=${category}` : '/medicines';
    const response = await nhsApi.get(url);
    return response.data;
  } catch (error) {
    console.error('Error getting medicines:', error.message);
    throw error;
  }
}


export const medicineRecommendation = async (medicines) => {
  try {
    const response = await api.post('/get_substitute?medicine_name=' + medicines);
    return response.data;
  } catch (error) {
    console.error('Error recommending medicines:', error.message);
    throw error;
  }
}