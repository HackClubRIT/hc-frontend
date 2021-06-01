import axios from "axios";
import { config } from "dotenv";

config();

const baseURL = process.env.REACT_APP_API_URL;

if(process.env.DEBUG)
  console.log(baseURL);

let headers = {};

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
}
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: headers,
});

export default axiosInstance;
