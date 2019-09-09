import types from '../types/formInput';

const formInput = (state={}, action) => {
  switch (action.type) {
    case types.SET_FORM_TEXT:
      return {
        ...state,
        formText: action.formText
      };
    case types.CLEAR_FORM_TEXT:
      return {};
    default:
      return state;
  }
};

export default formInput;