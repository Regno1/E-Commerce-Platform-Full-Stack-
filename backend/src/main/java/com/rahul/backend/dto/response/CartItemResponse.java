package com.rahul.backend.dto.response;

import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CartItemResponse {

    private Long productId;

    private String productName;


    private BigDecimal price;

    private Integer quantity;

    private BigDecimal subTotal;

}
