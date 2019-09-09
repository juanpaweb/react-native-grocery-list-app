import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import AppHeader from './appHeader';
import AppInput from './appInput';
import AppList from './appList';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class AppContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader/>
        <AppList/>
        <AppInput/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);