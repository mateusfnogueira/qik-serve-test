/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks";

import styles from "./product-list.module.css";
import {
  IProduct,
  IProductCategory,
} from "../../interfaces/products.interface";

export function ProductList({ categorie }: { categorie: IProductCategory }) {
  const { products, loading } = useProducts();

  const [isOpen, setIsOpen] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const newProducts = products.filter(
      (product) => product.category === categorie.name
    );

    setFilteredProducts(newProducts);
    console.log(products);
  }, [products, loading, categorie]);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_header} onClick={toggleAccordion}>
        <h1>{categorie?.name}</h1>
        <span className={styles.icon}>{isOpen ? "▲" : "▼"}</span>
      </div>

      <div
        className={`${styles.accordion_content} ${isOpen ? styles.open : ""}`}
      >
        {filteredProducts.map((product, i) => (
          <div key={i} className={styles.product_item}>
            <div className={styles.product_info}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className={styles.price}>R${product.price}</p>
            </div>
            {product.images ? (
              <img
                className={styles.product_img}
                src={product.images[0].image}
                alt={product.name}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
