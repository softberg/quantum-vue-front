import axios from "axios";
import { store } from "@/store";
import router from "@/router";
import auth from "@/middlewares/auth";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use((config) => {
    const middlewaress = router?.currentRoute?.value?.meta?.middleware;

    if (middlewaress == auth) {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
    
        if (accessToken && refreshToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
            config.headers["refresh_token"] = refreshToken;
        }
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});


axiosInstance.interceptors.response.use((response) => {
    if (response?.data?.tokens?.access_token && response?.data?.tokens?.refresh_token) {
        localStorage.setItem('accessToken', response.data.tokens.access_token);
        localStorage.setItem('refreshToken', response.data.tokens.refresh_token);
    }

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