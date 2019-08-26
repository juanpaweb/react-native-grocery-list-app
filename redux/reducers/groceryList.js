import types from '../types/groceryList';
import { loadState, saveState } from '../persistState';

const loadedState = loadState();

const groceryList = (state = loadedState, action) => {
  switch (action.type) {
    case types.SET_ITEM_TEXT:
      return {
        ...state,
        inputText: action.itemText
      }
    case types.ADD_ITEM_TO_LIST:
      return [
        ...state,
        {
          itemId: action.itemId,
          itemName: action.itemName
        }
      ];
    case types.REMOVE_ITEM_FROM_LIST:
      return state;
    default:
      return state;
  }
};

export default groceryList;