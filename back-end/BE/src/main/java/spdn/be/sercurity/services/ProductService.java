package spdn.be.sercurity.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import spdn.be.dto.ProductDto;
import spdn.be.entity.Product;

public interface ProductService {
    Page<Product> findAllProduct(Pageable pageable);

    void addProduct(Product product);

    ProductDto updateProduct(ProductDto product, Long id);

    Product findProductById(Long id);

    void deleteProductById(Long id);

}
