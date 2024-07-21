import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

interface AuthTokens {
  access: string;
  refresh: string;
}

export interface AuthState {
  authTokens: AuthTokens | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  authTokens: localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens")!)
    : null,
  loading: false,
  error: null,
};

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export const loginUserThunk = createAsyncThunk<
  AuthTokens,
  LoginCredentials,
  { rejectValue: string }
>("auth/loginUser", async ({ username, password }, thunkAPI) => {
  try {
    const response = await axiosInstance.post("token/", {
      username,
      password,
    });
    localStorage.setItem("authTokens", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to login");
  }
});

export const registerUserThunk = createAsyncThunk<
  void,
  RegisterCredentials,
  { rejectValue: string }
>("auth/registerUser", async ({ username, email, password }, thunkAPI) => {
  try {
    const response = await axiosInstance.post("register/", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to register");
  }
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.authTokens = null;
      localStorage.removeItem("authTokens");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUserThunk.fulfilled,
        (state, action: PayloadAction<AuthTokens>) => {
          state.authTokens = action.payload;
          state.loading = false;
        }
      )
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Register reducers
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
