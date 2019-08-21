import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import AppHeader from './appHeader';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class AppContainer extends React.Component {
  render() {
    return (
      <View>
        <AppHeader/>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);