// src/store/actions.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export interface Wallet {
  id: number;
  name: string;
  user: number;
  cryptos: number[];
}

export interface WalletState {
  wallets: Wallet[];
  loading: boolean;
  error: string | null;
}

const initialState: WalletState = {
  wallets: [],
  loading: false,
  error: null,
};

export const fetchWalletsThunk = createAsyncThunk<
  Wallet[],
  void,
  { rejectValue: string }
>("crypyolist/fetchCryptoList", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("crypto-lists/");
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to load wallets");
  }
});

export const addWalletThunk = createAsyncThunk<
  Wallet,
  Wallet,
  { rejectValue: string }
>("cryptoList/addCryptoList", async ({ name, user, cryptos }, thunkAPI) => {
  try {
    const response = await axiosInstance.post("crypto-lists/", {
      name,
      user,
      cryptos,
    });
    console.log("response: " + response.data);
    return response.data;
  } catch (error) {
    console.log("Error: " + error);
    return thunkAPI.rejectWithValue("Failed to add item");
  }
});

export const updateWalletThunk = createAsyncThunk<
  Wallet,
  Wallet,
  { rejectValue: string }
>(
  "cryptoList/updateCryptoList",
  async ({ id, name, user, cryptos }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`crypto-lists/${id}/`, {
        name,
        user,
        cryptos,
      });
      console.log("response: " + response.data);
      return response.data;
    } catch (error) {
      console.log("Error: " + error);
      return thunkAPI.rejectWithValue("Failed to update item");
    }
  }
);

export const deleteWalletThunk = createAsyncThunk<
  { id: number },
  { id: number },
  { rejectValue: string }
>("cryptoList/deleteCryptoList", async ({ id }, thunkAPI) => {
  try {
    await axiosInstance.delete(`crypto-lists/${id}/`);
    console.log("Deleted item with name: " + id);
    return { id };
  } catch (error) {
    console.log("Error: " + error);
    return thunkAPI.rejectWithValue("Failed to delete item");
  }
});

const walletsSlice = createSlice({
  name: "wallets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWalletsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.wallets = action.payload;
      })
      .addCase(fetchWalletsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Add item
      .addCase(addWalletThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addWalletThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.wallets.push(action.payload);
      })
      .addCase(addWalletThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateWalletThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWalletThunk.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.wallets.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.wallets[index] = action.payload;
        }
      })
      .addCase(updateWalletThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete item
      .addCase(deleteWalletThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWalletThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.wallets = state.wallets.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteWalletThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// export const { } = walletsSlice.actions;
export default walletsSlice.reducer;
