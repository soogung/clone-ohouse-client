import axios from "axios";

export const customAxios = axios.create({
    baseURL: "http://192.168.11.111:8080"
})
