import style from './style.module.css'

interface QuantityControlProps {
  quantity: number
  prevDisabled?: boolean
  size?: 'small' | 'medium' | 'large'
  addItems: (quantity: number) => void
  removeItems: (quantity: number) => void
}

export function QuantityControlComponent({
  quantity,
  prevDisabled = false,
  size = 'medium',
  addItems,
  removeItems
}: QuantityControlProps) {
  return (
    <div className={style.quantity_control}>
      <button onClick={() => removeItems(quantity)} disabled={prevDisabled}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={() => addItems(quantity)}>+</button>
      <style jsx>{`
        .${style.quantity_control} {
          gap: ${size === 'small' ? '4px' : size === 'medium' ? '8px' : '12px'};
        }
        .${style.quantity_control} button {
          width: ${size === 'small' ? '20px' : size === 'medium' ? '40px' : '60px'};
          height: ${size === 'small' ? '20px' : size === 'medium' ? '40px' : '60px'};
          font-size: ${size === 'small' ? '16px' : size === 'medium' ? '30px' : '50px'};
        }
        .${style.quantity_control} span {
          font-size: ${size === 'small' ? '16px' : size === 'medium' ? '30px' : '50px'};
          margin: 0 ${size === 'small' ? '8px' : size === 'medium' ? '16px' : '20px'};
        }
      `}</style>
    </div>
  )
}
