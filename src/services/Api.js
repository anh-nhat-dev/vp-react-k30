import axios from "axios";

axios.defaults.baseURL = "http://api.vietpro.online/v1";

export const getProducts = (config) => {
  return axios.get("/products", config);
};

export const getProduct = (id, config) => {
  return axios.get(`/products/${id}`, config);
};

export const getCommentByProductId = (id, config) =>
  axios.get(`/products/${id}/comments`, config);

export const createCommentByProductId = (id, data, config) =>
  axios.post(`/products/${id}/comments`, data, config);

export const getCategories = (config) => {
  return axios.get("/categories", config);
};

export const getCategory = (id, config) => {
  return axios.get(`/categories/${id}`, config);
};

export const order = (data, config) => {
  return axios.post("/order", data, config);
};
