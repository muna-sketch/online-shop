import axios from "axios";

/**Import API URL from .env */
// const ROOT_URL = `https://reqres.in/api`;
const ROOT_URL = `http://192.168.62.120:4000`; //link for expo go
// const ROOT_URL = `http://10.0.2.2:4000`;
// const ROOT_URL = `http://127.0.0.1:4000`;
// const ROOT_URL = `http://localhost:4000`;

/**Create an axios instance */
const axiosInstance = axios.create({
  baseURL: ROOT_URL,
});

export default axiosInstance;
