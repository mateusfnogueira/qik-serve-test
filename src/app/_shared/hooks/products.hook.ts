import { useEffect, useState } from "react";
import { IProductCategory, IProductMenu } from "../interfaces";

export function useProducts() {
  const [products, setProducts] = useState<IProductCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
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

    fetchProducts();
  }, []);

  return { products, loading, selectedCategory, setSelectedCategory };
}
