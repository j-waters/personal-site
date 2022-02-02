import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Particles from "particles.vue3";

import "@/style.scss";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).use(Particles).mount("#app");
