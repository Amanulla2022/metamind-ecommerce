import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const urls = {
  login: `${BASE_URL}/auth/login`,
  allProducts: `${BASE_URL}/products`,
  electronics: `${BASE_URL}/products/category/electronics`,
  jewelry: `${BASE_URL}/products/category/jewelery`,
  "men's clothing": `${BASE_URL}/products/category/men's clothing`,
  "women's clothing": `${BASE_URL}/products/category/women's clothing`,
};

export const login = async (username, password) => {
  const expectedUsername = "mor_2314";
  const expectedPassword = "83r5^_";

  try {
    if (username === expectedUsername && password === expectedPassword) {
      const response = await axios.post(urls.login, { username, password });
      return response.data;
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (err) {
    console.error("Login Error:", err);
  }
};

export const getProductsByCategory = async (category) => {
  try {
    if (category === "all") {
      const response = await axios.get(urls.allProducts);
      return response.data;
    } else {
      console.log("Original Category:", category);
      const categoryUrl = urls[category];
      console.log("Category URL:", categoryUrl);
      const response = await axios.get(categoryUrl);
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log("Unable to fetch");
  }
};
