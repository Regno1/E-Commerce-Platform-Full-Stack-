package com.rahul.backend.repository;

import com.rahul.backend.entity.CartItem;
import com.rahul.backend.entity.Product;
import com.rahul.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem , Long> {

    List<CartItem> findByUser(User user);

    Optional<CartItem> findByUserAndProduct(User user, Product product);

    void deleteByUser(User user);

    Optional<CartItem> findByIdAndUser(Long id,User user);
}
