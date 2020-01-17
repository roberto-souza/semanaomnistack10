import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.68.215:3333"
});

export default api;
