import { reactive } from 'vue';

export const store = reactive({
	user: null,
    accessToken: null,

	setUser(user) {
		this.user = user;
	},
    setAccessToken() {
        let accessToken = localStorage.getItem('accessToken');
        
        if (accessToken) {
            this.accessToken = accessToken
        }
    }
});