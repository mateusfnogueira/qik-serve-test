import { IProductCategory } from "../../interfaces/products.interface";
import { CategoryListItem } from "./category-list-item.component";

interface CategoryListProps {
  categories: IProductCategory[];
  setCatedory: (category: string) => void;
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="category-list">
      {categories?.map((category, i) => (
        <CategoryListItem key={i} category={category} />
      ))}
    </div>
  );
}
