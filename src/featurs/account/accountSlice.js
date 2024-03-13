const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case "account/wihtdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    case "account/transactionLoader":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
// export function deposit(amount) {
//   return { type: "", payload: amount };
// }

export function deposit(amount, currencyType) {
  if (currencyType === "USD")
    return { type: "account/deposit", payload: amount };
  else
    return async function (dispatch, getState) {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currencyType}&to=USD`,
      );
      const data = await res.json();
      const converted = data.rates.USD;
      dispatch({ type: "account/deposit", payload: converted });
    };
}
export function wihtdraw(amount) {
  return { type: "account/wihtdraw", payload: amount };
}
export function requestLoan(amount, loanPurpose) {
  return { type: "account/requestLoan", payload: { amount, loanPurpose } };
}
export function payLoan() {
  return { type: "account/payLoan" };
}
