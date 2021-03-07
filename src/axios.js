import axios from "axios";

const instance = axios.create({
  baseURL: "https://whatsapp-server-mern.herokuapp.com",
});

export default instance;
