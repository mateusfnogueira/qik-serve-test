import { IConfig } from '@/app/_shared/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ConfigState {
  data?: IConfig
  loading: boolean
  error: string | null
}

const initialState: ConfigState = {
  data: undefined,
  loading: false,
  error: null
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    fetchConfigStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchConfigSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.data = action.payload
    },
    fetchConfigFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    setConfig: (state, action: PayloadAction<IConfig>) => {
      state.data = action.payload
    }
  }
})

export const { fetchConfigStart, fetchConfigSuccess, fetchConfigFailure, setConfig } =
  configSlice.actions

export default configSlice.reducer
