package spdn.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spdn.be.entity.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {
}
