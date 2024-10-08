import { useTranslations } from 'next-intl'
import style from './style.module.css'
import { globalStore } from '@/stores/global.store'
import { formatCurrency } from '../../utils/currency.util'
import { QuantityControlComponent } from '../quantity-control/quantity-control.component'
import { addQuantityProduct, removeProduct, removeQuantityProduct } from '@/features/product.slice'
import { IOrderItem } from '../../interfaces'
import { useEffect, useState } from 'react'

export function OrderCardComponent() {
  const t = useTranslations('Cart')

  const store = globalStore
  const { getState, dispatch, subscribe } = store

  const [order, setOrder] = useState(getState().product.Order)

  function addItems(item: IOrderItem) {
    dispatch(addQuantityProduct(item))
  }

  function removeItems(item: IOrderItem) {
    if (item.quantity === 1) {
      dispatch(removeProduct(item.id))
      return
    }
    dispatch(removeQuantityProduct(item))
  }

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setOrder(getState().product.Order)
    })

    return () => unsubscribe()
  }, [subscribe, getState])

  return (
    <div className={style.card}>
      <div className={style.card_header}>
        <h3>{t('Basket')}</h3>
      </div>
      <div className={style.card_body}>
        {order.items.length === 0 && <p>{t('empty')}</p>}
        {order.items.map((item, i) => (
          <div key={i} className={style.product_item}>
            <div className={style.product_info}>
              <h3>{item.name}</h3>
              {item.description && item.description !== '' && (
                <p>
                  {item.description} - {'(' + formatCurrency(item.itemPrice) + ')'}
                </p>
              )}
              <QuantityControlComponent
                size="small"
                addItems={() => addItems(item)}
                removeItems={() => removeItems(item)}
                quantity={item.quantity}
              />
            </div>

            <p className={style.price}>{formatCurrency(item.itemPrice * item.quantity)}</p>
          </div>
        ))}
        {order.items.length > 0 && (
          <>
            <div className={style.sub_total}>
              <p>{t('subtotal')}</p>
              <p>{formatCurrency(order.total)}</p>
            </div>
            <div className={style.total}>
              <p>{t('total')}</p>
              <p>{formatCurrency(order.total)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
