// src/store/actions.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export interface Crypto {
  id: string;
  last_updated: string;
  name: string;
  market_cap: string;
  volume_24h: string;
  price: string;
  symbol: string;
}

export interface CryptoState {
  cryptos: Crypto[];
  loading: boolean;
  error: string | null;
}

const initialState: CryptoState = {
  cryptos: [],
  loading: false,
  error: null,
};

export const fetchCryptosThunk = createAsyncThunk<
  Crypto[],
  void,
  { rejectValue: string }
>("crypto/fetchCrypto", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("cryptocurrencies/");
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to load cryptos");
  }
});

const cryptoSlice = createSlice({
  name: "cryptos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptosThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCryptosThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.cryptos = action.payload;
      })
      .addCase(fetchCryptosThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// export const { } = cryptoSlice.actions;
export default cryptoSlice.reducer;
