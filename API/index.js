import axios from "axios";

export const api = axios.create({
  baseURL: "https://test-version-do-it-app-default-rtdb.firebaseio.com/",
  headers: { "Content-Type": "application/json" },
});
