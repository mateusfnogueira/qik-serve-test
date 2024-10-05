import { useEffect, useState } from "react";
import { IProductCategory, IProductMenu } from "../interfaces";

export function useProducts(categorie?: string) {
  const [products, setProducts] = useState<IProductCategory[]>([]);
  const [loading, setLoading] = useState(false);

  function filterProductsByCategory(
    data: IProductCategory[],
    categorie?: string
  ) {
    if (!categorie) return data;
    return [data?.find((section) => section.name === categorie)];
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.data.sections);
      setLoading(false);
    };
    if (categorie) {
      const data = filterProductsByCategory(products, categorie);
      if (data) {
        setProducts(
          data.filter((item): item is IProductCategory => item !== undefined)
        );
      }
    }

    fetchProducts();
  }, [categorie]);

  return { products, loading };
}
