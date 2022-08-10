import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/assets/css/main.css'

const app = createApp(App).use(router).mount('#app')

document.addEventListener('DOMContentLoaded', function () {
	M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
});
