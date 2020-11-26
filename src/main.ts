import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import Particles from "particles.vue3";

import "./style.scss";

createApp(App)
    .use(router)
    .use(Particles)
    .mount("#app");
