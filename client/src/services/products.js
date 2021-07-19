import { apiClient, composeUrl } from "./api";

const getCartData = async (code, customerCode) => {
    return await apiClient.post(
      composeUrl('/products', {
        // restaurant_code: code,
        // customer_code: customerCode,
      })
    );
  };
  
  export default {
    getCartData,
  };