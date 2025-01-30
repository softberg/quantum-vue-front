import axiosInstance from "@/helpers/axiosInstance";

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
            let response = await axiosInstance.get('/api/post/' + id);

            return response.data;

        } catch (err) {
            return err;
        }
    },

    async getMyPosts(accessToken) {
        try {
            let response = await axiosInstance.get('/api/my-posts', {
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
            const response = await axiosInstance.post('api/my-posts/create', postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            return response.data;
        } catch (err) {
            throw err;
        }
    },

    async amendPost(postData, id) {
        try {
            const response = await axiosInstance.put(`api/my-posts/amend/${id}`, postData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });

            return response.data;
        } catch (err) {
            throw err;
        }
    },

    async deleteImage(id) {
        try {
            const response = await axiosInstance.delete(`/api/my-posts/delete-image/${id}`, {
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
            const response = await axiosInstance.delete(`/api/my-posts/delete/${id}`, {
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