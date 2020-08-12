import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import categories from "./categories";
import products from "./products";
import productItems from "./productItems";
import currentProduct from "./currentProduct";

const rootReducer = combineReducers({
  currentUser,
  errors,
  categories,
  products,
  productItems,
  currentProduct,
});

export default rootReducer;
