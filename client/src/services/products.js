import { apiClient, composeUrl } from "./api";

const getProducts = async () => {
    return await apiClient.get(
      composeUrl('/api/product/list', {})
    );
};

const getProductByID = async (id) => {
  return await apiClient.get(
    composeUrl(`/api/product/get/${id}`, {})
  );
};

const deleteProduct = async (payload) => {
  return await apiClient.post(
    composeUrl('/api/product/remove', {}), 
    payload
  );
};
  
  export default {
    getProducts,
    getProductByID,
    deleteProduct,
  };