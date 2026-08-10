import api from "./api";

export const getCart = () =>
  api.get("/cart");

export const addToCart = (productId) =>
  api.post(`/cart/add/${productId}`);

export const updateCartItem = (cartItemId, quantity) =>
  api.put(`/cart/update/${cartItemId}`, null, { params: { quantity } });

export const removeCartItem = (cartItemId) =>
  api.delete(`/cart/remove/${cartItemId}`);

export const clearCart = () =>
  api.delete("/cart/clear");
