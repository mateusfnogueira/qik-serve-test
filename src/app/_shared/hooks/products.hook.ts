import { useEffect, useState } from "react";
import { IProductCategory, IProductMenu } from "../interfaces";

export function useProducts({ categorie }: { categorie?: string }) {
  const [products, setProducts] = useState<IProductCategory[]>([]);
  const [loading, setLoading] = useState(false);

  function filterProductsByCategory(
    categorie: string,
    data?: IProductCategory[]
  ) {
    return data?.find((section) => section.name === categorie);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("/api/products");
      const data: IProductMenu = await response.json();
      setProducts(data.sections);
      setLoading(false);
    };

    if (categorie) {
      const data = filterProductsByCategory(categorie, products);
      if (data) {
        setProducts([data]);
      }
    } else {
      fetchProducts();
    }

    fetchProducts();
  }, [categorie, products]);

  return { products, loading };
}
