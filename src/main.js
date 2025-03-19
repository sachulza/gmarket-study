// import './assets/main.css'
import "@/assets/style/index.scss";

import { createApp } from "vue";
import App from "./App.vue";

// router
import router from "@/router";

import { registerComponents } from "@/global-components";

const app = createApp(App);

app.use(router);
registerComponents(app);

app.mount("#app");
// createApp(App).mount("#app");
