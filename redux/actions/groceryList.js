import types from '../types/groceryList';

let itemId = 0;

export const setItemText = (itemText) => dispatch => {
  dispatch({
    type: types.SET_ITEM_TEXT,
    itemText: itemText
  });
};

export const addItemToList = (itemName) => dispatch => {
  dispatch({
    type: types.ADD_ITEM_TO_LIST,
    itemId: itemId++,
    itemName: itemName
  });
};

export const removeItemFromList = (id) => dispatch => {
  dispatch({
    type: types.REMOVE_ITEM_FROM_LIST
  });
};

export default {
  setItemText,
  addItemToList,
  removeItemFromList
};