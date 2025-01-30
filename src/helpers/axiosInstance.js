import axios from "axios";
import { store } from "@/store";
import router from "@/router";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (err) => {
    if (err.response.status == 401) {
        store.setUser(null);

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        router.push({ name: 'home' });
    }

    return Promise.reject(err);
});

export default axiosInstance;