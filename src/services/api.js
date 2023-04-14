import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-u5vp.onrender.com"
});