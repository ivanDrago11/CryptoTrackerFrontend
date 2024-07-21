// src/store/actions.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export interface Item {
  id: number;
  name: string;
  user: number;
  cryptos: number[];
}

export interface ItemState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

const initialState: ItemState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchItemsThunk = createAsyncThunk<
  Item[],
  void,
  { rejectValue: string }
>("crypyolist/fetchCryptoList", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get("crypto-lists/");
    return response.data;
  } catch (error) {
    return rejectWithValue("Failed to load items");
  }
});

export const addItemThunk = createAsyncThunk<
  Item,
  Item,
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

export const updateItemThunk = createAsyncThunk<
  Item,
  Item,
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

export const deleteItemThunk = createAsyncThunk<
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

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItemsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchItemsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Add item
      .addCase(addItemThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addItemThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateItemThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateItemThunk.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateItemThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete item
      .addCase(deleteItemThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteItemThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteItemThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// export const { } = itemsSlice.actions;
export default itemsSlice.reducer;
