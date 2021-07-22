import { apiClient, composeUrl } from "./api";

//products get
const getProducts = async () => {
  return await apiClient.get(composeUrl("/api/product/list", {}));
};

//product get by ID
const getProductByID = async id => {
  return await apiClient.get(composeUrl(`/api/product/get/${id}`, {}));
};

//product delete
const deleteProduct = async payload => {
  return await apiClient.post(composeUrl("/api/product/remove", {}), payload);
};

//product add
const addProduct = async payload => {
  return await apiClient.post(composeUrl("/api/product/add", {}), payload);
};

//product edit
const editProduct = async payload => {
  return await apiClient.post(composeUrl("/api/product/update", {}), payload);
};

//categories get
const getCategories = async () => {
  return await apiClient.get(composeUrl("/api/category/list", {}));
};

export default {
  getProducts,
  getProductByID,
  deleteProduct,
  getCategories,
  addProduct,
  editProduct
};
