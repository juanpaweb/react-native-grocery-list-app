import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppHeader from './components/appHeader';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader/>
      </View>
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
