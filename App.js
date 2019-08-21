import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './components/appContainer';
import configureStore from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <View style={styles.container}>
          <AppContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
