package com.rahul.backend.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.*;

import java.math.BigDecimal;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductRequest {
    @NotBlank(message = "name is required")
    private String name;

    @NotNull(message = "Price is required")
    @PositiveOrZero(message = "price have to be greater then zero")
    private BigDecimal price;

    @NotNull(message = "Stock is Required")
    @PositiveOrZero(message = "Stock can not be less then 0")
    private Integer stock;

    private String description;
    private String imageUrl;
    private String brand;

    @NotBlank(message = "category is required")
    private String category;
}
