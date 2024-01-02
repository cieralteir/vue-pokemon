import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: { "X-Requested-With": "XMLHttpRequest" },
  responseType: "json",
});

export default api;
