import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Global filters
app.config.globalProperties.$displayLabel = (value: string) => {
  if (!value) return "";
  return `${value.charAt(0).toUpperCase() + value.slice(1)}`.replace("-", " ");
};

app.mount("#app");
