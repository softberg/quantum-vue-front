import axiosInstance from "@/helpers/axiosInstance";

export const PostAPI = {
	async getPosts() {
		try {
			let response = await axiosInstance.get('/api/posts');

			return response.data;

		} catch (err) {
			return null;
		}
	},

	async getPost(id) {
		try {
			let response = await axiosInstance.get('/api/post/' + id);

			return response.data;

		} catch (err) {
			return null;
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
			return null;
		}
	}
}
