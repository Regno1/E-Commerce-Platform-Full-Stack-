package com.rahul.backend.mapper;

import com.rahul.backend.dto.request.ProductRequest;
import com.rahul.backend.dto.response.ProductResponse;
import com.rahul.backend.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductMapper {
public Product toEntity(ProductRequest request){
    return Product.builder()
            .name(request.getName())
            .description(request.getDescription())
            .price(request.getPrice())
            .stock(request.getStock())
            .imageUrl(request.getImageUrl())
            .brand(request.getBrand())
            .category(request.getCategory())
            .rating(0.0)
            .active(true)
            .build();
}

public ProductResponse toResponse(Product product){
    return ProductResponse.builder()
            .id(product.getId())
            .name(product.getName())
            .description(product.getDescription())
            .price(product.getPrice())
            .stock(product.getStock())
            .imageUrl(product.getImageUrl())
            .brand(product.getBrand())
            .rating(product.getRating())
            .active(product.getActive())
            .createdAt(product.getCreatedAt())
            .updatedAt(product.getUpdatedAt())
            .category(product.getCategory())
            .build();
}

}
