package spdn.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spdn.be.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {


}
