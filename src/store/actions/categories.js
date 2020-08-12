import { apiCall } from "../../services/api";
import { addError } from "./errors";
import {
  LOAD_CATEGORIES,
  REMOVE_CATEGORY,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
} from "../actionTypes";

export const loadCategories = (categories) => ({
  type: LOAD_CATEGORIES,
  categories,
});

export const handleAdd = (category) => ({
  type: ADD_CATEGORY,
  category,
});

export const removeCategory = (id) => ({
  type: REMOVE_CATEGORY,
  id,
});
export const updateCat = (id, category) => ({
  type: UPDATE_CATEGORY,
  id,
  category,
});

export const fetchCategories = () => {
  return (dispatch) => {
    return apiCall("get", "/api/categories")
      .then(function (res) {
        dispatch(loadCategories(res));
      })
      .catch(function (err) {
        addError(err.message);
      });
  };
};

export function addNewCategory(catName) {
  return function (dispatch) {
    return apiCall("post", "/api/admin/categories/add", { catName })
      .then(function (res) {
        dispatch(handleAdd(res));
      })
      .catch(function (err) {
        dispatch(addError(err));
      });
  };
}

export const deleteCategory = (id) => {
  return (dispatch) => {
    return apiCall("delete", `/api/admin/categories/${id}`)
      .then(function () {
        dispatch(removeCategory(id));
      })
      .catch(function (err) {
        addError(err.message);
      });
  };
};

export const updateCategory = (id, catName) => {
  return (dispatch) => {
    return apiCall("put", `/api/admin/categories/${id}`, { catName })
      .then((res) => {
        dispatch(updateCat(id, res));
      })
      .catch((err) => {
        dispatch(addError(err));
      });
  };
};
