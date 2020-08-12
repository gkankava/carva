import {
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  CLEAR_PRODUCTS,
} from "../actionTypes";

const product = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return [...action.products];
    case ADD_PRODUCT:
      return [...state, action.product];
    case UPDATE_PRODUCT:
      return state.filter((p) => p._id !== action.id).concat(action.product);
    case REMOVE_PRODUCT:
      return state.filter((p) => p._id !== action.id);
    case CLEAR_PRODUCTS:
      return [];
    default:
      return state;
  }
};

export default product;
