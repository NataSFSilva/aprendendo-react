import axios from "axios";


const api = axios.create({
    baseURL: "https://6514aa4ddc3282a6a3cd5ed7.mockapi.io/musicas"
});

export default api;