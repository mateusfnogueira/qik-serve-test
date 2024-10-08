import { IOrderItem } from '@/app/_shared/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
  Order: {
    items: IOrderItem[]
    total: number
  }
}

const initialState: ProductState = {
  Order: {
    items: [],
    total: 0
  }
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IOrderItem>) => {
      if (state.Order) {
        state.Order = {
          ...state.Order,
          items: [...state.Order?.items, action.payload],
          total: state.Order?.total + action.payload.itemPrice * action.payload.quantity
        }
      }
    },
    addQuantityProduct: (state, action: PayloadAction<IOrderItem>) => {
      if (state.Order) {
        const newItems = state.Order.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        })
        const newTotal = newItems.reduce((acc, item) => acc + item.itemPrice * item.quantity, 0)
        state.Order = {
          ...state.Order,
          items: newItems,
          total: newTotal
        }
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      if (state.Order) {
        const filteredItems = state.Order.items.filter((item) => item.id !== action.payload)
        const newTotal = filteredItems.reduce(
          (acc, item) => acc - item.itemPrice * item.quantity,
          0
        )
        state.Order = {
          ...state.Order,
          items: filteredItems,
          total: newTotal
        }
      }
    },
    removeQuantityProduct: (state, action: PayloadAction<IOrderItem>) => {
      if (state.Order) {
        const newItems = state.Order.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
          return item
        })
        const newTotal = newItems.reduce((acc, item) => acc + item.itemPrice * item.quantity, 0)
        state.Order = {
          ...state.Order,
          items: newItems,
          total: newTotal
        }
      }
    }
  }
})

export const { addProduct, removeProduct, addQuantityProduct, removeQuantityProduct } =
  productSlice.actions

export default productSlice.reducer
