package com.rahul.backend.service;

import com.rahul.backend.dto.response.CartResponse;

public interface CartService {

    CartResponse addToCart(Long productId);

    CartResponse getCart();

    CartResponse updateCartItem(Long cartItemId ,Integer quantity);

    void removeCartItem(Long cartItemId);

    void clearCart();
}
