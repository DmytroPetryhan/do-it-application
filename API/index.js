import axios from "axios";

export const api = axios.create({
  baseURL: "https://do-it-app-2-0-default-rtdb.firebaseio.com/",
  headers: { "Content-Type": "application/json" },
});
