'use client'
import { CategoryList } from '@/app/_shared/components/category-list/category-list.component'
import { ProductList } from '@/app/_shared/components/product-list/product-list.component'
import { ProductModal } from '@/app/_shared/components/product-modal/product-modal.component'
import { useProducts } from '@/app/_shared/hooks'
import { IProduct } from '@/app/_shared/interfaces'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function MenuPage() {
  const t = useTranslations('Menu')

  const { products, categories, loading } = useProducts()

  const [selectedProduct, setSelectedProduct] = useState<IProduct | undefined>()
  const [openModal, setOpenModal] = useState(false)

  if (loading) {
    return <main>loading</main>
  }

  function handleCloseModal() {
    setOpenModal(false)
    setSelectedProduct(undefined)
  }

  function handleOpenModal(product: IProduct) {
    setSelectedProduct(product)
    setOpenModal(true)
  }

  return (
    <main>
      <CategoryList categories={categories} />
      {categories.map((categorie, i) => (
        <ProductList
          key={i}
          categorie={categorie}
          products={products}
          setSelectedProduct={handleOpenModal}
        />
      ))}
      <ProductModal product={selectedProduct} isOpen={openModal} onClose={handleCloseModal} />
    </main>
  )
}
