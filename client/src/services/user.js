import { apiClient, composeUrl } from "./api";

const register = async (payload) => {
    return await apiClient.post(
      composeUrl('/pub/register', {}), 
      payload 
    );
};

const login = async (payload) => {
    return await apiClient.post(
      composeUrl('/pub/login', {}), 
      payload 
    );
};
  
export default {
    register,
    login,
};