import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
  LOAD_PRODUCT_ITEMS,
  ADD_PRODUCT_ITEM,
  UPDATE_PRODUCT_ITEM,
  REMOVE_PRODUCT_ITEM,
} from "../actionTypes";

export const loadProductItems = (productItems) => ({
  type: LOAD_PRODUCT_ITEMS,
  productItems,
});

export const addItem = (item) => ({
  type: ADD_PRODUCT_ITEM,
  item,
});

export const updateItem = (id, item) => ({
  type: UPDATE_PRODUCT_ITEM,
  id,
  item,
});

export const removeItem = (id) => ({
  type: REMOVE_PRODUCT_ITEM,
  id,
});

export const fetchProductItems = (product_id) => {
  return (dispatch) => {
    return apiCall("get", `/api/productList/${product_id}`)
      .then(function (res) {
        dispatch(loadProductItems(res));
      })
      .catch(function (err) {
        addError(err.message);
      });
  };
};

export const addProductItem = (id, pTitle, pInfo, props) => {
  return (dispatch) => {
    return apiCall("POST", `/api/admin/productitem/${id}`, {
      pTitle,
      pInfo,
      props,
    })
      .then((res) => {
        dispatch(addItem(res));
      })
      .catch((err) => dispatch(addError(err)));
  };
};

export const updateProductItem = (
  p_id,
  id,
  newPTitle,
  newPInfo,
  newProperties
) => {
  return (dispatch) => {
    console.log(`/api/admin/productitem/${p_id}/${id}`);
    return apiCall("put", `/api/admin/productitem/${p_id}/${id}`, {
      newPTitle,
      newPInfo,
      newProperties,
    })
      .then((res) => {
        dispatch(updateItem(id, res));
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};

export const removeProductItem = (p_id, id) => {
  return (dispatch) => {
    return apiCall("delete", `/api/admin/productitem/${p_id}/${id}`)
      .then((res) => {
        dispatch(removeItem(id));
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
