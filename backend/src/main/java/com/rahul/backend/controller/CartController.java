package com.rahul.backend.controller;

import com.rahul.backend.dto.response.CartResponse;
import com.rahul.backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping("/add/{productId}")
    public CartResponse addToCart(@PathVariable Long productId){
        return cartService.addToCart(productId);
    }

    @GetMapping
    public CartResponse getCart(){
        return cartService.getCart();
    }

    @PostMapping("/update/{cartItemId}")
    public CartResponse updateCartItem(
            @PathVariable Long cartItemId,
            @RequestParam Integer quantity
    ){
        return cartService.updateCartItem(cartItemId,quantity);
    }
    @DeleteMapping("/remove/{cartItemId}")
    public void removeCartItem(@PathVariable Long cartItemId){
        cartService.removeCartItem(cartItemId);
    }

    @DeleteMapping("/clear")
    public void clearCart(){
        cartService.clearCart();
    }
}
