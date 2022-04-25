package spdn.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spdn.be.entity.SubCategory;

public interface SubCategoryRepository extends JpaRepository<SubCategory, Long> {
    SubCategory findBySubCategoryName(String subCategoryName);
}
