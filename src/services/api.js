import axios from 'axios';

// const API_URL = "http://ec2-54-164-98-82.compute-1.amazonaws.com:8000";
const API_URL = "http://ec2-54-221-91-1.compute-1.amazonaws.com:8000";

export const saveData = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/save`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response.data;
    }
}

export const getData = async (data) => {
    try {
        const response = await axios.get(`${API_URL}/get`);
        return response.data;
    } catch (error) {
        console.log('Error while calling the api ', error.message);
        return error.response.data;
    }
}