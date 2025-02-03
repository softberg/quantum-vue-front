import axiosInstance from "@/helpers/axiosInstance";
import i18n from "../i18n";

export const PostAPI = {
    async getPosts(params) {
        try {
            let response = await axiosInstance.get('/api/posts', { params });

            return response.data;

        } catch (err) {
            return err;
        }
    },

    async getPost(id) {
        try {
            let response = await axiosInstance.get(`/api/${ i18n.global.locale.value }/post/${ id }`);

            return response.data;

        } catch (err) {
            return err;
        }
    },

    async getMyPosts(accessToken) {
        try {
            let response = await axiosInstance.get(`/api/${ i18n.global.locale.value }/my-posts`, {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });

            return response.data;
        }
        catch (err) {
            return err;
        }
    },

    async createPost(postData) {
        try {
            const response = await axiosInstance.post(`api/${ i18n.global.locale.value }/my-posts/create`, postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            return response.data;
        } catch (err) {
            return err;
        }
    },

    async amendPost(postData, id) {
        try {
            const response = await axiosInstance.put(`api/${ i18n.global.locale.value }/my-posts/amend/${id}`, postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            return response.data;
        } catch (err) {
            return err;
        }
    },

    async deleteImage(id) {
        try {
            const response = await axiosInstance.delete(`/api/${ i18n.global.locale.value }/my-posts/delete-image/${ id }`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            return response.data;
        } catch (err) {
            throw err;
        }
    },

    async deletePost(id) {
        try {
            const response = await axiosInstance.delete(`/api/${ i18n.global.locale.value }/my-posts/delete/${ id }`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            return response.data;
        } catch (err) {
            throw err;
        }
    }
}