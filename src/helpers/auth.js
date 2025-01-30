import axiosInstance from "@/helpers/axiosInstance";

export const AuthAPI = {
    async getUser(accessToken) {
        try {
            let response = await axiosInstance.get('/api/me', {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });

            return response.data.data;

        } catch (err) {
            return null;
        }
    },

    async signin(form) {
        try {
            let response = await axiosInstance.post('/api/signin', form);

            if (response.data.status !== 'success') {
                const error = new Error(response.data.message);
                error.status = 'error';
                throw error;
            }

            return response.data;

        } catch (err) {
            return err;
        }
    },

    async signup(form) {
        try {
            let response = await axiosInstance.post('/api/signup', form);

            if (response.data.status !== 'success') {
                let message = null;
                for (let key in response.data.message) {
                    message = response.data.message[key][0];
                    break;
                }

                const error = new Error(message);
                error.status = 'error';
                throw error;
            }

            return response.data;

        } catch (err) {
            console.log(err.message);
            return err;
        }
    },

    async signout(refreshToken) {
        try {
            let response = await axiosInstance.get('/api/signout', {
                headers: {
                    'refresh_token': refreshToken
                }
            });

            return response.data;
        } catch (err) {
            return null;
        }
    }
}