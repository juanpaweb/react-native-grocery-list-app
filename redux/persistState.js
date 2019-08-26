import { AsyncStorage, Alert } from 'react-native';

export const loadState = () => {
  try {
    const serializedState = JSON.parse(AsyncStorage.getItem('state'));
    if (serializedState === null) {
      return {};
    }
  } catch (err) {
    return {};
  }
  
  return serializedState;

};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem('state', serializedState);
  } catch (err) {
    Alert.alert(
      'Error',
      'Failed to restore saved state'
    );
  }
};