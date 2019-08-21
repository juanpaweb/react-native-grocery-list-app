import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <Header
          placement="left"
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Grocery List', style: { color: '#fff' } }}
          containerStyle={{ backgroundColor: 'green', justifyContent: 'space-around' }}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);