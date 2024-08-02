import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface HeaderState {
  page: string;
}

const initialState: HeaderState = {
  page: "/",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
      // console.log(state.page);
    },
  },
});

export const { setPage } = headerSlice.actions;

export default headerSlice.reducer;
