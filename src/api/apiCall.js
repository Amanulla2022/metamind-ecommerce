import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const urls = {
  login: `${BASE_URL}/auth/login`,
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
    throw err;
  }
};
