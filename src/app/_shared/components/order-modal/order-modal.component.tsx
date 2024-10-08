import { globalStore } from '@/stores/global.store'
import style from './style.module.css'
import { useTranslations } from 'next-intl'
import { QuantityControlComponent } from '../quantity-control/quantity-control.component'
import { IOrderItem } from '../../interfaces'
import { addQuantityProduct, removeQuantityProduct } from '@/features/product.slice'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const t = useTranslations('Cart')

  const store = globalStore
  const { getState, dispatch } = store
  const order = getState().product.Order
  const items = order.items

  function addItems(item: IOrderItem) {
    dispatch(addQuantityProduct(item))
  }

  function removeItems(item: IOrderItem) {
    dispatch(removeQuantityProduct(item))
  }

  if (!isOpen) return null

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.modal_header}>
          <h1>{t('Basket')}</h1>
          <button className={style.close_button} onClick={onClose}>
            X
          </button>
        </div>

        <div className={style.modal_content}>
          {items.map((item, i) => (
            <div key={i} className={style.product_item}>
              <div className={style.product_info}>
                <h3>{item.name}</h3>
                {item.description && item.description !== '' && (
                  <p>
                    {item.description} - {'(' + item.itemPrice + ')'}
                  </p>
                )}
                <QuantityControlComponent
                  addItems={() => addItems(item)}
                  removeItems={() => removeItems(item)}
                  quantity={item.quantity}
                />
              </div>

              <p className={style.price}>R${item.itemPrice * item.quantity}</p>
            </div>
          ))}

          <div className={style.sub_total}>
            <p>Subtotal</p>
            <p>R$ {order.total}</p>
          </div>
          <div className={style.total}>
            <p>Total</p>
            <p>R$ {order.total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
