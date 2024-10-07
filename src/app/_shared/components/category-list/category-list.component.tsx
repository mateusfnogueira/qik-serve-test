import { useProducts } from "../../hooks";
import { IProductCategory } from "../../interfaces/products.interface";
import { CategoryListItem } from "./category-list-item.component";

import style from "./category-list.module.css";

interface CategoryListProps {
  categories: IProductCategory[];
}

export function CategoryList({ categories }: CategoryListProps) {
  const { selectedCategory, setSelectedCategory } = useProducts();

  return (
    <div className={style.category_list}>
      {categories?.map((category, i) => (
        <CategoryListItem
          key={i}
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
}
