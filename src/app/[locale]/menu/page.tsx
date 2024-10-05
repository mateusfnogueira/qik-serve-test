"use client";
import { CategoryList } from "@/app/_shared/components/category-list/category-list.component";
import { useProducts } from "@/app/_shared/hooks";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function MenuPage() {
  const t = useTranslations("Menu");

  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const { products, loading } = useProducts(selectedCategory);

  if (loading) {
    return <main>loading</main>;
  }
  return (
    <main>
      <CategoryList
        categories={products}
        setCatedory={setSelectedCategory}
      />
    </main>
  );
}
