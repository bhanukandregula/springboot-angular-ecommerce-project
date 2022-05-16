package com.bhanukandregula.ecommerce.dao;

import com.bhanukandregula.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
