package com.rahul.backend.service.impl;

import com.rahul.backend.dto.response.CartItemResponse;
import com.rahul.backend.dto.response.CartResponse;
import com.rahul.backend.entity.CartItem;
import com.rahul.backend.entity.Product;
import com.rahul.backend.entity.User;
import com.rahul.backend.repository.CartItemRepository;
import com.rahul.backend.repository.ProductRepository;
import com.rahul.backend.repository.UserRepository;

import com.rahul.backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartItemRepository cartItemRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;


    @Override
    public CartResponse addToCart(Long productId) {
        Authentication authentication=
                SecurityContextHolder.getContext().getAuthentication();

        String email= authentication.getName();

        User user= userRepository.findByEmail(email).orElseThrow(()->new RuntimeException("User not Found"));

        Product product=productRepository.findById(productId).orElseThrow(()-> new RuntimeException("Product not found"));

        Optional<CartItem> existingCartItem= cartItemRepository.findByUserAndProduct(user,product);

        if(existingCartItem.isPresent()){
            CartItem cartItem= existingCartItem.get();

            cartItem.setQuantity(cartItem.getQuantity()+1);

            cartItemRepository.save(cartItem);

        }else{
            CartItem cartItem= CartItem.builder()
                    .user(user)
                    .product(product)
                    .quantity(1)
                    .build();
            cartItemRepository.save(cartItem);
        }
        return getCart();
    }

    @Override
    public CartResponse getCart() {
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();

        String email=authentication.getName();

        User user= userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("User Not Found"));

        List<CartItem> cartItems= cartItemRepository.findByUser(user);

        List<CartItemResponse> items = cartItems.stream()
                .map(cartItem -> CartItemResponse.builder()
                        .cartItemId(cartItem.getId())
                        .productId(cartItem.getProduct().getId())
                        .productName(cartItem.getProduct().getName())
                        .imageUrl(cartItem.getProduct().getImageUrl())
                        .price(cartItem.getProduct().getPrice())
                        .quantity(cartItem.getQuantity())
                        .subTotal(
                                cartItem.getProduct()
                                        .getPrice()
                                        .multiply(BigDecimal.valueOf(cartItem.getQuantity()))
                        )
                        .build()).toList();

        BigDecimal totalPrice = items.stream()
                .map(CartItemResponse::getSubTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        return CartResponse.builder()
                .items(items)
                .totalPrice(totalPrice)
                .build();

    }

    @Override
    public CartResponse updateCartItem(Long cartItemId, Integer quantity) {
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();

        String email= authentication.getName();

        User user= userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("User Not Found"));

        CartItem cartItem= cartItemRepository.findByIdAndUser(cartItemId,user).orElseThrow(()-> new RuntimeException("Cart Not Found"));

        if (quantity<=0){
            throw new RuntimeException("Quantity must be Greater Then Zero");
        }
        cartItem.setQuantity(quantity);

        cartItemRepository.save(cartItem);

        return getCart();
    }

    @Override
    public void removeCartItem(Long cartItemId) {
     Authentication authentication= SecurityContextHolder.getContext().getAuthentication();

     String email= authentication.getName();

     User user= userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("User not Found"));

     CartItem cartItem= cartItemRepository
             .findByIdAndUser(cartItemId,user)
             .orElseThrow(()-> new RuntimeException("Cart Item not Found "));

     cartItemRepository.delete(cartItem);


    }

    @Transactional
    @Override
    public void clearCart() {
    Authentication authentication= SecurityContextHolder.getContext().getAuthentication();

    String email= authentication.getName();

    User user = userRepository.findByEmail(email).orElseThrow(()-> new RuntimeException("USer not Found"));

    cartItemRepository.deleteByUser(user);
    }
}
