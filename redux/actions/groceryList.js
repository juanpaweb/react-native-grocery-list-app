import types from '../types/groceryList';

export const addItemToList = () => dispatch => {
  dispatch({
    type: types.ADD_ITEM_TO_LIST
  });
};

export const removeItemFromList = () => dispatch => {
  dispatch({
    type: types.REMOVE_ITEM_FROM_LIST
  });
};

export default {
  addItemToList,
  removeItemFromList
};