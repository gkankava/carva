import {
  LOAD_PRODUCT_ITEMS,
  ADD_PRODUCT_ITEM,
  UPDATE_PRODUCT_ITEM,
  REMOVE_PRODUCT_ITEM,
} from "../actionTypes";

const productItem = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCT_ITEMS:
      return [...action.productItems];
    case ADD_PRODUCT_ITEM:
      return [...state, action.item];
    case UPDATE_PRODUCT_ITEM:
      return state.filter((i) => i._id !== action.id).concat(action.item);
    case REMOVE_PRODUCT_ITEM:
      return state.filter((i) => i._id !== action.id);
    default:
      return state;
  }
};

export default productItem;
