"use client";
import { CategoryList } from "@/app/_shared/components/category-list/category-list.component";
import { ProductList } from "@/app/_shared/components/product-list/product-list.component";
import { useProducts } from "@/app/_shared/hooks";
import { useTranslations } from "next-intl";

export default function MenuPage() {
  const t = useTranslations("Menu");

  const { products, categories, loading } = useProducts();

  if (loading) {
    return <main>loading</main>;
  }

  return (
    <main>
      <CategoryList categories={categories} />
      {categories.map((categorie, i) => (
        <ProductList key={i} categorie={categorie} />
      ))}
    </main>
  );
}
