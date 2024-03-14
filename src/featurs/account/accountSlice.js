import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};
const accountSlice = createSlice({
  initialState: initialState,
  name: "account",
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    wihtdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, loanPurpose) {
        return { payload: amount, loanPurpose };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.balance += action.payload.amount;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.loanPurpose;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    transactionLoader(state) {
      state.isLoading = true;
    },
  },
});
export function deposit(amount, currencyType) {
  if (currencyType === "USD")
    return { type: "account/deposit", payload: amount };
  return async function (dispatch, getState) {
    dispatch({ type: "account/transactionLoader" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyType}&to=USD`,
    );
    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: converted });
  };
}
export const { requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;

// const accountSlice = createSlice({
//   initialState: initialState,
//   name: "account",
//   reducers: {
//     deposit(state, action) {
//       state.balance += action.payload;
//       state.isLoading = false;
//     },
//     wihtdraw(state, action) {
//       state.balance -= action.payload;
//     },
//     requestLoan: {
//       prepare(amount, loanPurpose) {
//         return { payload: { amount, loanPurpose } };
//       },
//       reducer(state, action) {
//         state.balance += action.payload.amount;
//         state.loan = action.payload.amount;
//         state.loanPurpose = action.payload.loanPurpose;
//       },
//     },
//     payLoan(state) {
//       state.balance -= state.loan;
//       state.loan = 0;
//       state.loanPurpose = "";
//     },
//     transactionLoader(state) {
//       state.isLoading = true;
//     },
//   },
// });
// export function deposit(amount, currencyType) {
//   if (currencyType === "USD")
//     return { type: "account/deposit", payload: amount };
//   return async function (dispatch, getState) {
//     dispatch({ type: "account/transactionLoader" });
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyType}&to=USD`,
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }
// export const { wihtdraw, requestLoan, payLoan } = accountSlice.actions;

// export default accountSlice.reducer;
