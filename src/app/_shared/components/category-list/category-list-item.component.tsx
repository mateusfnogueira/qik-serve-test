/* eslint-disable @next/next/no-img-element */
import { IProductCategory } from "../../interfaces";

export function CategoryListItem({ category }: { category: IProductCategory }) {
  console.log(category);
  return (
    <div className="category">
      <img src={category.images[0].image} alt={category.name} />
      {category.name}
    </div>
  );
}
