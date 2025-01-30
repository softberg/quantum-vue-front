import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import "@/assets/css/main.css";

import { createApp } from "vue";
import App from "@/views/App.vue";
import router from "@/router";
import i18n from "@/i18n/index";
import * as Constants from "@/constants/index";

const app = createApp(App);

app.config.globalProperties.$C = Constants;
app.use(router)
app.use(i18n)
app.mount('#app');