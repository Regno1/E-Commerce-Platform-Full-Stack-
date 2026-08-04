package com.rahul.backend.service.impl;

import com.rahul.backend.dto.response.ProductResponse;
import com.rahul.backend.entity.Product;
import com.rahul.backend.exception.ResourceNotFound;
import com.rahul.backend.mapper.ProductMapper;
import com.rahul.backend.repository.ProductRepository;
import com.rahul.backend.service.ProductService;
import com.rahul.backend.specification.ProductSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {
  private final ProductRepository productRepository;
  private final ProductMapper productMapper;



    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(()-> new ResourceNotFound("Product not Found"));
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        Product existingProduct = productRepository.findById(id).orElseThrow(()-> new RuntimeException("Product not found"));

        existingProduct.setName(product.getName());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setStock(product.getStock());
        existingProduct.setImageUrl(product.getImageUrl());
        existingProduct.setBrand(product.getBrand());
        existingProduct.setRating(product.getRating());
        existingProduct.setActive(product.getActive());

        return productRepository.save(existingProduct);
    }

    @Override
    public void deleteProduct(Long id) {
      productRepository.deleteById(id);
    }

    @Override
    public List<ProductResponse> searchProduct(String keyword) {
        List<Product> products=
                productRepository.findByNameContainingIgnoreCase(keyword);
        return products.stream()
                .map(productMapper::toResponse)
                .toList();
    }



    @Override
    public Page<ProductResponse> getAllProducts(
            String keyword,
            String category,
            int page,
            int size,
            String sortBy,
            String direction) {

        // Sorting
        Sort sort = direction.equalsIgnoreCase("asc")
                ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        // Pagination
        Pageable pageable = PageRequest.of(page, size, sort);

        // Empty Specification se start karte hain
        Specification<Product> specification = Specification.allOf();

        // Category filter
        if (category != null && !category.isBlank()) {
            specification = specification.and(
                    ProductSpecification.hasCategory(category)
            );
        }

        // Keyword filter
        if (keyword != null && !keyword.isBlank()) {
            specification = specification.and(
                    ProductSpecification.hasKeyword(keyword)
            );
        }

        // Database se data fetch
        Page<Product> products =
                productRepository.findAll(specification, pageable);

        // Entity -> DTO
        return products.map(productMapper::toResponse);
    }


}
