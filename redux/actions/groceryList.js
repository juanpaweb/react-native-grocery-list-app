import types from '../types/groceryList';
import uuid from 'uuid';

export const addItemToList = (itemName) => dispatch => {
  dispatch({
    type: types.ADD_ITEM_TO_LIST,
    itemId: uuid.v4(),
    itemName: itemName
  });
};

export const removeItemFromList = (itemId) => dispatch => {
  dispatch({
    type: types.REMOVE_ITEM_FROM_LIST,
    itemId: itemId
  });
};

export const removeAllFromList = () => dispatch => {
  dispatch({
    type: types.REMOVE_ALL_FROM_LIST
  });
};
