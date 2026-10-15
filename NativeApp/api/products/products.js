import { get } from "../main";

/**Method to get all products */
const getProducts = async () => {
  let loading = true;
  let error = null;
  let data = null;

  try {
    /**Fetch products from api */
    const response = await get(`products`);
    console.log(response);

    /**Capture data if response is okay */
    if (response.status === 200) {
      data = response.data;
    } else {
      error = "Error fetching products data";
    }
  } catch (err) {
    console.log(err);
    error = err.message || "An unknown error occurred";
  } finally {
    loading = false;
  }

  return { data, loading, error };
};

const getAllProducts = async () => {
  let loading = true;
  let error = null;
  let data = null;

  try {
    /**Capture data if response is okay */
    const response = await get("products");
    if (response.status === 200) {
      data = response.data;
    } else {
      error = "Failed to fetch products. Please try again.";
    }
  } catch (err) {
    console.log(err);
    error = err.message || "An unexpected error occurred.";
    // error = err.response
    //   ? err.response.data.message
    //   : err.message || "An unexpected error occurred.";
  } finally {
    loading = false;
  }

  return { data, loading, error };
};

export { getProducts, getAllProducts };
