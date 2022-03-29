package spdn.be.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import spdn.be.entity.Product;
import spdn.be.sercurity.services.ProductService;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/list-products")
    public ResponseEntity<Page<Product>> getAllProduct(@PageableDefault(size = 10) Pageable pageable) {
        Page<Product> productPage = this.productService.findAllProduct(pageable);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(productPage,HttpStatus.OK);
    }
    @PostMapping("/create-product")
    public ResponseEntity<?> addProduct(@Valid @RequestBody Product product ){
        productService.addProduct(product);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(product.getProductId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

}
