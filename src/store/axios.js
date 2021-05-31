import axios from "axios";

const baseURL = "https://hackclub-backend.herokuapp.com/";
let headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: headers,
});

export default axiosInstance;
