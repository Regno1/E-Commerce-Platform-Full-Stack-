package com.rahul.backend.repository;

import com.rahul.backend.entity.Order;
import com.rahul.backend.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {


    List<OrderItem> findByOrder(Order order);
}
