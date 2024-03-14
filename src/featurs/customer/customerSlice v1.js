const initialState = {
  fullName: "",
  userName: "",
  pin: "",
  createdAt: "",
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        userName: action.payload.userName,
        pin: action.payload.pin,
        createdAt: new Date().toISOString(),
      };
    case "customer/UpdateCustomer":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

export function createCustomer(fullName, userName, pin) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, userName, pin },
  };
}
export function UpdateCustomer(fullName) {
  return { type: "customer/UpdateCustomer", payload: fullName };
}
