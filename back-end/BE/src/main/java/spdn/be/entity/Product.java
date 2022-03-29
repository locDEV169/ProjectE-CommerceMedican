package spdn.be.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class Product {
    @Id
    @SequenceGenerator(
            name = "product_sequence",
            sequenceName = "product_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "product_sequence"
    )
    private long productId;
    @NotBlank
    private String productName;
    @NotBlank
    private String description;
    @NotNull
    private Integer price;
    @NotNull
    private Integer quantity;
    @CreationTimestamp
    private LocalDate createDate;
    @UpdateTimestamp
    private LocalDate updateDate;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "attribute_id" , referencedColumnName = "attributeId")
    private Attribute attribute;
}
