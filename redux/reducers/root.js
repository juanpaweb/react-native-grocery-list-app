import { combineReducers } from 'redux';
import groceryList from '../reducers/groceryList';
import formInput from '../reducers/formInput';

export default combineReducers({
  groceryList,
  formInput
});