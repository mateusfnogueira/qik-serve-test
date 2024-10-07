import { IOrderItem } from '@/app/_shared/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { IOrder } from '@/app/_shared/interfaces'

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
        console.log('state.Order', state.Order, action.payload)
        state.Order = {
          ...state.Order,
          items: [...state.Order?.items, action.payload],
          total: state.Order?.total + action.payload.itemPrice * action.payload.quantity
        }
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      if (state.Order) {
        const filteredItems = state.Order.items.filter((item) => item.id !== action.payload)
        const newTotal = filteredItems.reduce(
          (acc, item) => acc + item.itemPrice * item.quantity,
          0
        )
        state.Order = {
          ...state.Order,
          items: filteredItems,
          total: newTotal
        }
      }
    }
  }
})

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer
