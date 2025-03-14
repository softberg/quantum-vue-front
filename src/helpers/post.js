import axiosInstance from "@/helpers/axiosInstance";
import { getLang } from "@/helpers/helper";

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
            let response = await axiosInstance.get(`/api/${ getLang() }/post/${ id }`);

            return response.data;

        } catch (err) {
            return err;
        }
    },

    async getMyPosts() {
        try {
            let response = await axiosInstance.get(`/api/${ getLang() }/my-posts`);

            return response.data;
        }
        catch (err) {
            return err;
        }
    },

    async createPost(postData) {
        try {
            const response = await axiosInstance.post(`api/${ getLang() }/my-posts/create`, postData);

            return response.data;
        } catch (err) {
            return err;
        }
    },

    async amendPost(postData, id) {
        try {
            const response = await axiosInstance.put(`api/${ getLang() }/my-posts/amend/${id}`, postData);

            return response.data;
        } catch (err) {
            return err;
        }
    },

    async deleteImage(id) {
        try {
            const response = await axiosInstance.delete(`/api/${ getLang() }/my-posts/delete-image/${ id }`);

            return response.data;
        } catch (err) {
            throw err;
        }
    },

    async deletePost(id) {
        try {
            const response = await axiosInstance.delete(`/api/${ getLang() }/my-posts/delete/${ id }`);

            return response.data;
        } catch (err) {
            throw err;
        }
    }
}