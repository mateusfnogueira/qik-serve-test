/* eslint-disable @next/next/no-img-element */
import { globalStore } from '@/stores/global.store'
import { IProduct } from '../../interfaces'
import { formatCurrency } from '../../utils/currency.util'

import styles from './style.module.css'
import { useEffect, useState } from 'react'

export function ProductListItemComponent({
  product,
  setSelectedProduct
}: {
  product: IProduct
  setSelectedProduct: (product: IProduct) => void
}) {
  const store = globalStore
  const { getState, subscribe } = store
  const [counter, setCounter] = useState(0)
  const [order, setOrder] = useState(getState().product.Order)

  const productsInOrder = order.items.filter((item) => item.name === product.name)

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setOrder(getState().product.Order)
    })
    const count = productsInOrder.reduce((acc, item) => acc + item.quantity, 0)
    setCounter(count)

    return () => unsubscribe()
  }, [productsInOrder, getState, subscribe])

  return (
    <div className={styles.product_item} onClick={() => setSelectedProduct(product)}>
      <div className={styles.product_info}>
        <div className={styles.div_title}>
          {counter > 0 ? <div className={styles.counter}>{counter}</div> : null}
          <h3>{product.name}</h3>
        </div>
        <p>{product.description}</p>
        <p className={styles.price}>{formatCurrency(product.price)}</p>
      </div>
      {product.images ? (
        <img className={styles.product_img} src={product.images[0].image} alt={product.name} />
      ) : null}
    </div>
  )
}
