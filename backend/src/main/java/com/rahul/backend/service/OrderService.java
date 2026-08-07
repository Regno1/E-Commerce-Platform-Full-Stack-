package com.rahul.backend.service;

import com.rahul.backend.dto.response.OrderResponse;
import com.rahul.backend.entity.OrderStatus;

import java.util.List;

public interface OrderService {
    OrderResponse placeOrder();

    List<OrderResponse> getMyOrders();

    OrderResponse getOrderById(Long orderId);

    OrderResponse updateOrderStatus(Long orderId, OrderStatus status);
}
