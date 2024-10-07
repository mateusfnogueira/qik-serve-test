import { configureStore } from '@reduxjs/toolkit'
import configReducer from '../features/config.slice'
import productReducer from '../features/product.slice'

export const globalStore = configureStore({
  reducer: {
    config: configReducer,
    product: productReducer
  }
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch
