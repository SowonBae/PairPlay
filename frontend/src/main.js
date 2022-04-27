import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./common/store";
import axios from "./common/axios";
import naver from "vue3-naver-maps";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(axios).use(store).use(router).use(naver, { clientId: "your clientId" }).mount("#app");
