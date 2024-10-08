/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IModifierItem, IOrderItem, IProduct } from '../../interfaces'
import style from './style.module.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../../features/product.slice'
import { Button } from '../commom-button/common-button.component'
import { useTranslations } from 'next-intl'
import { QuantityControlComponent } from '../quantity-control/quantity-control.component'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product?: IProduct
}

export function ProductModal({ isOpen, product, onClose }: ProductModalProps) {
  const t = useTranslations('Menu')
  const [selectedSize, setSelectedSize] = useState<IModifierItem | null>(null)
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const dispatch = useDispatch()

  function handleSelectSize(size: IModifierItem) {
    setSelectedSize(size)
  }

  function addItem() {
    setSelectedQuantity((prev) => prev + 1)
  }

  function removeItem() {
    setSelectedQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  if (!isOpen || !product) return null

  function handleAddToCart() {
    const orderItem: IOrderItem = {
      id: uuidv4(),
      itemId: product?.id.toString(),
      name: product?.name,
      itemPrice: selectedSize?.price ?? product?.price ?? 0,
      quantity: selectedQuantity,
      description: selectedSize?.name ?? ''
    }
    dispatch(addProduct(orderItem))
    onClose()
  }

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button className={style.close_button} onClick={onClose}>
          X
        </button>
        {product.images ? (
          <img className={style.product_img} src={product.images[0].image} alt={product.name} />
        ) : (
          <img
            className={style.product_img}
            src={'/imgs/not_image_available.jpg'}
            alt={product.name}
          />
        )}

        <div className={style.product_info}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>

        {product.modifiers ? (
          <div className={style.size_options}>
            <div className={style.options_description}>
              <h3>{t(`Modal.${product.modifiers[0].name.toLowerCase()}`)}</h3>
              <p>
                {t('Modal.max options').replace(
                  '%max%',
                  product.modifiers[0].maxChoices.toString()
                )}
              </p>
            </div>
            {product.modifiers[0].items.map((item, i) => (
              <label key={i}>
                <div className={style.item_description}>
                  <h3>{item.name}</h3>
                  <p>R${item.price}</p>
                </div>
                <input
                  type="radio"
                  name="size"
                  value={item.price}
                  checked={selectedSize === item}
                  onChange={() => handleSelectSize(item)}
                />
              </label>
            ))}
          </div>
        ) : (
          <div className={style.size_options}></div>
        )}
        <div className={style.div_control}>
          <QuantityControlComponent
            addItems={addItem}
            removeItems={removeItem}
            quantity={selectedQuantity}
          />

          <Button onClick={handleAddToCart}>
            {t('Modal.add to cart').replace(
              '%price%',
              ((selectedSize?.price ?? product.price) * selectedQuantity).toString()
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
