const BASE_URL = 'https://fakestoreapi.com';

const getProductAPI = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const responseJson = await response.json();
  return responseJson;
};

export default getProductAPI;
