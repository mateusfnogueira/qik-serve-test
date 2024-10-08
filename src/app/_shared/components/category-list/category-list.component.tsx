import { IProductCategory } from '../../interfaces/products.interface'
import { CategoryListItem } from './category-list-item.component'

import style from './style.module.css'

interface CategoryListProps {
  categories: IProductCategory[]
  selectedCategory?: string
  setSelectedCategory: (category: string) => void
}

export function CategoryList({
  categories,
  setSelectedCategory,
  selectedCategory
}: CategoryListProps) {
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
  )
}
