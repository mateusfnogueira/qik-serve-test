/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { IModifierItem, IProduct } from '../../interfaces'
import style from './style.module.css'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product?: IProduct
}

export function ProductModal({ isOpen, product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<IModifierItem | null>(null)
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  function handleSelectSize(size: IModifierItem) {
    setSelectedSize(size)
  }

  if (!isOpen || !product) return null

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
              <h3>{product.modifiers[0].name}</h3>
              <p>Select {product.modifiers[0].maxChoices} option</p>
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
          <div className={style.quantity_control}>
            <button onClick={() => setSelectedQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>
              -
            </button>
            <span>{selectedQuantity}</span>
            <button onClick={() => setSelectedQuantity((prev) => prev + 1)}>+</button>
          </div>

          <button className={style.add_to_cart}>
            Add to cart - R${(selectedSize?.price ?? product.price) * selectedQuantity}
          </button>
        </div>
      </div>
    </div>
  )
}
