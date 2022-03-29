package spdn.be.sercurity.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import spdn.be.entity.Product;

public interface ProductService {
    Page<Product> findAllProduct(Pageable pageable);
    void addProduct(Product product);

}
