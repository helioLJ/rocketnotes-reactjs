import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-lj5q.onrender.com"
});