import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_CURRENT_PRODUCT, CLEAR_CURRENT_PRODUCT } from "../actionTypes";

export const loadOne = (currentProduct) => ({
  type: LOAD_CURRENT_PRODUCT,
  currentProduct,
});

export const clear = () => ({
  type: CLEAR_CURRENT_PRODUCT,
});

export const fetchCurrentProduct = (c_id, p_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/products/${c_id}/${p_id}`)
      .then((res) => {
        dispatch(loadOne(res));
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const clearCurrentProduct = () => {
  return (dispatch) => {
    dispatch(clear());
  };
};
