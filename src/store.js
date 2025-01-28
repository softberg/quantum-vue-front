import { reactive } from 'vue';

export const store = reactive({
	user: null,
    searchText: '',
    params: {},

	setUser(user) {
		this.user = user;
	},
    
    setSearchText(searchText) {
        this.searchText = searchText;
    }
});