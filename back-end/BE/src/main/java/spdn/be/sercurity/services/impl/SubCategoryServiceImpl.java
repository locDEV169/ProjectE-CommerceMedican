package spdn.be.sercurity.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spdn.be.entity.Product;
import spdn.be.entity.SubCategory;
import spdn.be.repository.SubCategoryRepository;
import spdn.be.sercurity.services.SubCategoryService;

import java.util.ArrayList;
import java.util.List;
@Service
public class SubCategoryServiceImpl implements SubCategoryService{
    @Autowired
    SubCategoryRepository subCategoryRepository;
    public List<SubCategory> getSubcategory(){
        return subCategoryRepository.findAll();
    }

    public List<Product> getproducts(String subCategoryName){
        List<SubCategory> subCategoryEntity = subCategoryRepository.findAll();
        List<Product> productEntity = new ArrayList<>();
        for (SubCategory i: subCategoryEntity){
            if (i.getSubCategoryName().equals(subCategoryName)){
                System.out.println("If Loop");
                for(Product product: i.getProducts()){
                    productEntity.add(product);
                }
            }
        }
        return productEntity;

    }
}
