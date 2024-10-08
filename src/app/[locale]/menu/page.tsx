'use client'
import { CategoryList } from '@/app/_shared/components/category-list/category-list.component'
import { ProductList } from '@/app/_shared/components/product-list/product-list.component'
import { ProductModal } from '@/app/_shared/components/product-modal/product-modal.component'
import { useProducts } from '@/app/_shared/hooks'
import { IProduct } from '@/app/_shared/interfaces'
import { useEffect, useState } from 'react'

import { OrderCardComponent } from '@/app/_shared/components/order-card/order-card.component'
import { SearchInput } from '@/app/_shared/components/search-input/search-input.component'

import { FaSearch } from 'react-icons/fa'
import style from './style.module.css'

export default function MenuPage() {
  const { products, categories, selectedCategory, setSelectedCategory } = useProducts()

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products)

  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>()

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    setFilteredProducts(products)
  }, [selectedCategory, products])

  function handleCloseModal() {
    setOpenModal(false)
    setSelectedProduct(undefined)
  }

  function handleOpenModal(product: IProduct) {
    setSelectedProduct(product)
    setOpenModal(true)
  }

  function handleSearch(value: string) {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredProducts(filtered)
  }

  return (
    <main className={style.main}>
      <SearchInput
        icon={<FaSearch />}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
      <div className={style.row}>
        <section className={style.menu_section}>
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {categories.map((categorie, i) => (
            <ProductList
              key={i}
              categorie={categorie}
              products={filteredProducts.filter((product) => product.category === categorie.name)}
              setSelectedProduct={handleOpenModal}
            />
          ))}
        </section>
        <section className={style.order_section}>
          <OrderCardComponent />
        </section>
      </div>
      <ProductModal product={selectedProduct} isOpen={openModal} onClose={handleCloseModal} />
    </main>
  )
}
