import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  // eslint-disable-next-line
  UPDATE_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_PRODUCTS,
} from "../actionTypes";

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products,
});

export const addNewProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const deleteProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});

export const updateProductItem = (id, product) => ({
  type: UPDATE_PRODUCT,
  id,
  product,
});

export const clear = () => ({
  type: CLEAR_PRODUCTS,
});

export const clearProducts = () => {
  return (dispatch) => {
    dispatch(clear());
  };
};

export const fetchProducts = (cat_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/products/${cat_id}`)
      .then(function (res) {
        dispatch(loadProducts(res));
      })
      .catch(function (err) {
        addError(err.message);
      });
  };
};

export const addProduct = (cat_id, { ...state }, imageUrl, info) => {
  return (dispatch) => {
    return apiCall("POST", `/api/admin/products/${cat_id}/new`, {
      ...state,
      imageUrl,
      info,
    })
      .then((res) => {
        dispatch(addNewProduct(res));
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const updateProduct = (
  c_id,
  p_id,
  newName,
  newImageUrl,
  newInfo,
  newCategory
) => {
  return (dispatch) => {
    return apiCall("put", `/api/admin/products/${c_id}/${p_id}`, {
      newName,
      newImageUrl,
      newInfo,
      newCategory,
    })
      .then((res) => {
        dispatch(updateProductItem(p_id, res));
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const removeProduct = (c_id, p_id) => {
  return (dispatch) => {
    return apiCall("delete", `/api/admin/products/${c_id}/${p_id}`)
      .then((res) => {
        dispatch(deleteProduct(p_id));
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
