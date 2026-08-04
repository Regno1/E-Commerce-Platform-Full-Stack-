package com.rahul.backend.service;

import com.rahul.backend.dto.response.ProductResponse;
import com.rahul.backend.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductService {


    Product getProductById(Long id);

    Product createProduct(Product product);

    Product updateProduct(Long id,Product product);

    void deleteProduct(Long id);

    List<ProductResponse> searchProduct(String keyword);

    Page<ProductResponse> getAllProducts(String keyword,String category,int page,int size ,String sortBy,String direction);


}
