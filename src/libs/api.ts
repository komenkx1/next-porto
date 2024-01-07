import axios from "axios";

const api = axios.create({
  // baseURL: "https://nest-porto-smoky.vercel.app", // Replace with your API base URL
  baseURL: "http://localhost:3001", // Replace with your API base URL
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    const accessToken = JSON.parse(localStorage.getItem("token") || "{}");

    // If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
// End of Request interceptor

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    console.log(error);
    if(error.response.status === 401){
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
// End of Response interceptor

export default api;
