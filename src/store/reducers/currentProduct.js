import { LOAD_CURRENT_PRODUCT, CLEAR_CURRENT_PRODUCT } from "../actionTypes";

const currentProduct = (state = [], action) => {
  switch (action.type) {
    case LOAD_CURRENT_PRODUCT:
      return action.currentProduct;
    case CLEAR_CURRENT_PRODUCT:
      return [];
    default:
      return state;
  }
};

export default currentProduct;
