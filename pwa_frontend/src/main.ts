import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";
import axios from 'axios'

loadFonts();

createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app");

axios.defaults.baseURL = process.env.VUE_APP_URL;