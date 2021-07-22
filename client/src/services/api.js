import axios from "axios";

export const apiClient = axios.create();

export const apiEndPoint = process.env.VUE_APP_API_BASE_URL;

export const setAuthToken = async token => {
  if (token) {
    apiClient.defaults.headers["x-token"] = token;
  } else {
    delete apiClient.defaults.headers["x-token"];
  }
};

export const composeUrl = (route, params = {}) => {
  let url = `${apiEndPoint}${route}?`;
  Object.keys(params).forEach(key => {
    url += `${key}=${params[key]}&`;
  });
  return url;
};
