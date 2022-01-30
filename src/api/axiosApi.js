import axios from "axios";
export const urlBase = 'http://localhost:1337'

export const config = {
  baseURL: urlBase,
  // baseURL: domainApi,
  headers: { "Content-Type": "application/json" },
};

export const axiosApi = axios.create(config);

axiosApi.urlBase = urlBase;

axiosApi.interceptors.response.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosApi;