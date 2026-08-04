package com.rahul.backend.specification;

import com.rahul.backend.entity.Product;
import org.springframework.data.jpa.domain.Specification;

public class ProductSpecification {

    public static Specification<Product> hasCategory(String category){
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("category"),category);
    }

    public static Specification<Product> hasKeyword(String keyword){
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.like(
                        criteriaBuilder.lower(root.get("name")),
                        "%"+ keyword.toLowerCase() + "%"
                );
    }
}
