import types from '../types/groceryList';

const groceryList = (state = [], action) => {
  switch (action.type) {
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
    case types.REMOVE_ALL_FROM_LIST:
      return [];
    default:
      return state;
  }
};

export default groceryList;