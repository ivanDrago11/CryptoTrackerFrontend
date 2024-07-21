import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import itemsReducer from "./cryptoListSlice";
import authReducer from "./authSlice";
import cryptoReducer from "./dashboardSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    items: itemsReducer,
    auth: authReducer,
    cryptos: cryptoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
