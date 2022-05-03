package spdn.be.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spdn.be.dto.ProductDto;
import spdn.be.entity.Product;
import spdn.be.entity.SubCategory;
import spdn.be.sercurity.services.SubCategoryService;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/subcategory")
public class SubCategoryController {
    @Autowired
    private SubCategoryService subCategoryService;
    @GetMapping("/get-allsub")
    public List<SubCategory> getSubcategory(){
        return subCategoryService.getSubcategory();
    }
    @GetMapping("/get-products-bysub/{name}")
    public List<Product> getProduts(@PathVariable("name") String name){
        return subCategoryService.getproducts(name);
    }
    @PostMapping("/create-subcategory")
    public ResponseEntity<SubCategory> createSubcategory(@RequestBody SubCategory subCategory){
        subCategoryService.createSub(subCategory);
        return new  ResponseEntity<>(subCategory, HttpStatus.OK);
    }
}
