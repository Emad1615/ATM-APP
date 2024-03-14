import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  userName: "",
  pin: "",
  createdAt: "",
};

const customerSlice = createSlice({
  initialState: initialState,
  name: "customer",
  reducers: {
    createCustomer: {
      prepare(fullname, username, pin) {
        return { payload: { fullname, username, pin } };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.userName = action.payload.userName;
        state.pin = action.payload.pin;
      },
    },
    UpdateCustomer(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { UpdateCustomer, createCustomer } = customerSlice.actions;
export default customerSlice.reducer;
