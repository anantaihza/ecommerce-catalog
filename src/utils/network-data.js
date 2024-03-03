const BASE_URL = 'https://fakestoreapi.com';

const getAllProductAPI = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const responseJson = await response.json();
  return responseJson;
};
const getProductAPI = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const responseJson = await response.json();
  return responseJson;
};

export { getAllProductAPI, getProductAPI };
