import {
  LOAD_CATEGORIES,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
} from "../actionTypes";

const category = (state = [], action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return [...action.categories];
    case ADD_CATEGORY:
      return [...state, action.category];
    case UPDATE_CATEGORY:
      return state.filter((c) => c._id !== action.id).concat(action.category);
    // return console.log(state.push(action.category));
    case REMOVE_CATEGORY:
      return state.filter((cat) => cat._id !== action.id);
    default:
      return state;
  }
};

export default category;
