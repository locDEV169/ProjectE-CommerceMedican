package spdn.be.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SubCategory implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subCategoryId;

    @Column(nullable = false, length = 100)
    private String subCategoryName;
    @NotNull
    private String imageSub;
    @OneToMany(targetEntity = Product.class, mappedBy = "subCategory", cascade = CascadeType.ALL)
    @JsonIgnore
    public List<Product> products = new ArrayList<Product>();
}
