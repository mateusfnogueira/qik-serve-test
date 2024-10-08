import { globalStore } from '@/stores/global.store'
import style from './style.module.css'
import { useTranslations } from 'next-intl'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const t = useTranslations('Order')

  const store = globalStore
  const { getState } = store
  const order = getState().product.Order
  const items = order.items
  if (!isOpen) return null
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.modal_header}>
          <h1>Basket</h1>
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
                    {item.description} - {item.itemPrice}
                  </p>
                )}
              </div>

              <p className={style.price}>R${item.itemPrice * item.quantity}</p>
            </div>
          ))}

          <div className={style.sub_total}>
            <p>Subtotal</p>
            <p>R$ 0,00</p>
          </div>
          <div className={style.total}>
            <p>Total</p>
            <p>R$ 0,00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
