import axios from "axios";

const api = axios.create({
  baseURL: "https://pet-commerce.shop",
  headers: {
    "content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
    withCredentials: true,
  },
});

api.interceptors.request.use(function (config) {
  const auth = localStorage.getItem("accesstoken");
  config.headers.common["Authorization"] = auth;
  return config;
});

export default api;
