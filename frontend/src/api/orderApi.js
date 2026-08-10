import api from "./api";

export const placeOrder = () =>
  api.post("/orders/place");

export const getMyOrders = () =>
  api.get("/orders");

export const getOrderById = (orderId) =>
  api.get(`/orders/${orderId}`);

export const updateOrderStatus = (orderId, status) =>
  api.put(`/orders/${orderId}/status`, null, { params: { status } });
