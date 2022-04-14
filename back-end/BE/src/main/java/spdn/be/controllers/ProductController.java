package spdn.be.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import spdn.be.dto.ProductDto;
import spdn.be.entity.Product;
import spdn.be.exception.ErrorMessages;
import spdn.be.exception.RequestException;
import spdn.be.sercurity.services.ProductService;

import javax.validation.Valid;
import java.net.URI;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/list-products")
    public ResponseEntity<Page<Product>> getAllProduct(@PageableDefault(size = 10) Pageable pageable) {
        Page<Product> productPage = this.productService.findAllProduct(pageable);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);

        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }
    @GetMapping("{id}")
    public  ResponseEntity<Product> getProductById(@PathVariable Long id){
        Product product = productService.findProductById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    @PostMapping("/create-product")
    public ResponseEntity<Product> addProduct(@Valid @RequestBody Product product) {
        productService.addProduct(product);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(product.getProductId())
                .toUri();
        ResponseEntity.created(location).build();
        return ResponseEntity.created(location).build();
    }

    @DeleteMapping("/delete-product/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable Long id) {
        Product product = productService.findProductById(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.productService.deleteProductById(product.getProductId());
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
//bug
    @PutMapping("/edit-product/{id}")
    public ResponseEntity<ProductDto> updateProduct(@RequestBody ProductDto body, @PathVariable Long id) {
        try {
            ProductDto product = productService.updateProduct(body, id);
            return ResponseEntity.status(HttpStatus.OK).body(product);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RequestException((ErrorMessages.MISSING_REQUIRED_FIELD.getErrorMessages()));
        }

    }

}
