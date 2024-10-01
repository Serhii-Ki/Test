import axios from "axios";

export const instance = axios.create({
  baseURL: "https://66180a6c9a41b1b3dfbc17c9.mockapi.io/items",
});
