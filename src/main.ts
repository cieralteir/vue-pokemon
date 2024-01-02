import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Global filters
declare module "vue" {
  interface ComponentCustomProperties {
    $displayLabel: (value: string) => string;
    $pokemonTypeColor: (type: string) => string;
  }
}
app.config.globalProperties.$displayLabel = (value: string): string => {
  if (!value) return "";
  return `${value.charAt(0).toUpperCase() + value.slice(1)}`.replace("-", " ");
};
app.config.globalProperties.$pokemonTypeColor = (type: string): string => {
  let color = "";
  switch (type) {
    case "fire":
      color = "red-500";
      break;
    case "water":
      color = "cyan-500";
      break;
    case "grass":
      color = "emerald-500";
      break;
    case "electric":
      color = "amber-300";
      break;
    case "ground":
      break;
    case "rock":
      color = "stone-500";
      break;
    case "normal":
      color = "neutral-500";
      break;
    case "fighting":
      color = "amber-800";
      break;
    case "flying":
      color = "sky-400";
      break;
    case "poison":
      color = "violet-400";
      break;
    case "psychic":
      color = "pink-400";
      break;
    case "ice":
      color = "cyan-400";
      break;
    case "bug":
      color = "lime-500";
      break;
    case "dragon":
      color = "sky-700";
      break;
    case "ghost":
    case "dark":
      color = "gray-600";
      break;
    case "steel":
      color = "slate-600";
      break;
    case "fairy":
      color = "rose-400";
      break;
  }
  return color;
};

app.mount("#app");
