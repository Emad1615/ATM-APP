import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import customerReducer from "./featurs/customer/customerSlice v1";
import accountReducer from "./featurs/account/accountSlice v1";
const reducers = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
