import { useEffect, useState } from "react";
import { IProduct, IProductCategory } from "../interfaces";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<IProductCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();
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
      const response = await fetch(
        `/api/products?category=${selectedCategory}`
      );
      const data = await response.json();
      setCategories(data.data.categoryList);
      setProducts(data.data.allProducts);
      setLoading(false);
    };

    fetchProducts();
  }, [selectedCategory]);

  return {
    products,
    categories,
    loading,
    selectedCategory,
    setSelectedCategory,
  };
}
