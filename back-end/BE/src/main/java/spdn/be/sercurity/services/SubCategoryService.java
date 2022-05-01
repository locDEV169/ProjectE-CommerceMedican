package spdn.be.sercurity.services;

import spdn.be.entity.Product;
import spdn.be.entity.SubCategory;

import java.util.List;

public interface SubCategoryService {
     List<SubCategory> getSubcategory();
     List<Product> getproducts(String name);
     void createSub(SubCategory subCategory);
}
