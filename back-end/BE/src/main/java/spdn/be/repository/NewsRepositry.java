package spdn.be.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import spdn.be.entity.News;

@Repository
public interface NewsRepositry extends JpaRepository<News,Long> {
}
