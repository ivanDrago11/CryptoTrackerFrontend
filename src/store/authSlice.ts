import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import { RootState } from ".";

interface AuthTokens {
  access: string;
  refresh: string;
}

export interface AuthState {
  authTokens: AuthTokens | null;
  username: string | null;
  userId: number;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  authTokens: localStorage.getItem("authTokens")
    ? JSON.parse(localStorage.getItem("authTokens")!)
    : null,
  username: localStorage.getItem("username") || null,
  userId: 0,

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

interface User {
  email: string;
  id: number;
  username: string;
}

export const fetchUserIdThunk = createAsyncThunk<
  { userId: number },
  { username: string },
  { rejectValue: string }
>("auth/fetchUsers", async ({ username }, thunkAPI) => {
  console.log(username);
  try {
    const response = await axiosInstance.get("users/");
    const users = response.data;
    console.log(users);
    const user = users.find((element: User) => element.username == username);
    localStorage.setItem("userId", JSON.stringify(user.id));
    console.log(user.id);
    return { userId: user.id };
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue("Failed to fetch user");
  }
});

export const loginUserThunk = createAsyncThunk<
  {
    authTokens: AuthTokens;
    username: string;
  },
  LoginCredentials,
  { rejectValue: string }
>("auth/loginUser", async ({ username, password }, thunkAPI) => {
  try {
    const response = await axiosInstance.post("token/", {
      username,
      password,
    });
    const authTokens: AuthTokens = response.data;
    localStorage.setItem("authTokens", JSON.stringify(authTokens));
    localStorage.setItem("username", username);
    // localStorage.setItem("userId", userId);
    const users = await axiosInstance.get("users/");
    const user = users.data.find(
      (element: User) => element.username == username
    );
    localStorage.setItem("userId", user.id);
    console.log(user);
    return { authTokens: response.data, username };
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
      localStorage.removeItem("username");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUserIdThunk.fulfilled,
        (state, action: PayloadAction<{ userId: number }>) => {
          console.log(action.payload);
          console.log(action.payload.userId);
          state.userId = action.payload.userId;
        }
      )
      .addCase(fetchUserIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUserThunk.fulfilled,
        (
          state,
          action: PayloadAction<{ authTokens: AuthTokens; username: string }>
        ) => {
          state.authTokens = action.payload.authTokens;
          state.username = action.payload.username;
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

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.authTokens;

export const selectUsername = (state: RootState) => state.auth.username;

export default authSlice.reducer;
