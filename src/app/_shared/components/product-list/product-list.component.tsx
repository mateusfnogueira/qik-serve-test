/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'

import styles from './style.module.css'
import { IProduct, IProductCategory } from '../../interfaces/products.interface'
import { ProductListItemComponent } from './product-list-item.component'

interface ProductListProps {
  categorie: IProductCategory
  products: IProduct[]
  setSelectedProduct: (product: IProduct) => void
}

export function ProductList({ categorie, products, setSelectedProduct }: ProductListProps) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  if (products.length === 0) return null

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_header} onClick={toggleAccordion}>
        <h1>{categorie?.name}</h1>
        <span className={styles.icon}>{isOpen ? '▲' : '▼'}</span>
      </div>

      <div className={`${styles.accordion_content} ${isOpen ? styles.open : ''}`}>
        {products.map((product, i) => (
          <ProductListItemComponent
            key={i}
            product={product}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>
    </div>
  )
}
