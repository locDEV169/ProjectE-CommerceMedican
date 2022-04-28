package spdn.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spdn.be.entity.CartItem;


@Repository
public interface CartItemRepository extends JpaRepository<CartItem,Long> {
}
