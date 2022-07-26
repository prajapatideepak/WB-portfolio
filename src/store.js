import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
});
const midleware = [thunk];
const intialState = {};

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
