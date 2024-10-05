import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConfigState {
  data: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: ConfigState = {
  data: null,
  loading: false,
  error: null,
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    fetchConfigStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchConfigSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchConfigFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchConfigStart, fetchConfigSuccess, fetchConfigFailure } =
  configSlice.actions;

export default configSlice.reducer;
