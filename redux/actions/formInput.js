import types from '../types/formInput';

export const setFormText = (formText) => dispatch => {
  dispatch({
    type: types.SET_FORM_TEXT,
    formText: formText
  });
};

export const clearFormText = () => dispatch => {
  dispatch({
    type: types.CLEAR_FORM_TEXT
  });
};