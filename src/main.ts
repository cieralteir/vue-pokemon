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
app.config.globalProperties.$pokemonTypeColor = (type: string) => {
  switch (type) {
    case "fire":
      return "red-500";
    case "water":
      return "blue-400";
    case "grass":
      return "emerald-500";
    case "electric":
      return "amber-300";
    case "ground":
    case "rock":
      return "stone-700";
    case "normal":
      return "neutral-500";
    case "fighting":
      return "orange-900";
    case "flying":
      return "sky-400";
    case "poison":
      return "purple-600";
    case "psychic":
      return "pink-500";
    case "ice":
      return "cyan-400";
    case "bug":
      return "lime-500";
    case "dragon":
      return "sky-700";
    case "ghost":
    case "dark":
      return "gray-700";
    case "steel":
      return "slate-600"
    case "fairy":
      return "rose-400";
  }
};

app.mount("#app");
