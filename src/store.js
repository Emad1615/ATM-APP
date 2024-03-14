import customerReducer from "./featurs/customer/customerSlice";
import accountReducer from "./featurs/account/accountSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: accountReducer,
  },
});
