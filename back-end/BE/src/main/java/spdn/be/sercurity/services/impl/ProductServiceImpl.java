package spdn.be.sercurity.services.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import spdn.be.dto.ProductDto;
import spdn.be.entity.Product;
import spdn.be.repository.AttributeRepository;
import spdn.be.repository.ProductRepository;
import spdn.be.repository.SubCategoryRepository;
import spdn.be.sercurity.services.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private AttributeRepository attributeRepository;
    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Override
    public Page<Product> findAllProduct(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public void addProduct(Product product) {
        productRepository.save(product);
    }

    @Override
    public ProductDto updateProduct(ProductDto body, Long id) {
        Product product = new Product();
        BeanUtils.copyProperties(body, product);
        Product productUpdate = productRepository.findById(id).get();
        productUpdate.setProductName(product.getProductName());
        productUpdate.setPrice(product.getPrice());
        productUpdate.setDescription(product.getDescription());
        productUpdate.setQuantity(product.getQuantity());
        productUpdate.setAttribute(product.getAttribute());
        productUpdate.setSubCategory(subCategoryRepository.findBySubCategoryName(body.getSubCategoryName()));
        productRepository.save(productUpdate);
        ProductDto returnValue = new ProductDto();
        BeanUtils.copyProperties(productUpdate, returnValue);
        returnValue.setSubCategoryName(productUpdate.getSubCategory().getSubCategoryName());

        return returnValue;

    }


    @Override
    public Product findProductById(Long id) {
        return productRepository.findById(id).get();

    }

    @Override
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }


}
