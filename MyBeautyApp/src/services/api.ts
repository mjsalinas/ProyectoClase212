import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.1.119:4000/",
});

export default api;