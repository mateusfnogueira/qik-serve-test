import { configureStore } from '@reduxjs/toolkit';
import configReducer from '../features/config.slice'; // Importa o reducer do slice que vamos criar

export const globalStore = configureStore({
  reducer: {
    config: configReducer,
  },
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;