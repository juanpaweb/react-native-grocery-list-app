import React from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import * as groceryActions from '../redux/actions/groceryList';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  removeAllFromList: () => dispatch(groceryActions.removeAllFromList())
});

class AppHeader extends React.Component {
  
  _clearAllConfirmation() {
    Alert.alert(
      'Clear All',
      'Are you sure you want to clear all items?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => { this.props.removeAllFromList(); }
        }
      ]
    );
  }
  
  render() {
    return (
      <Header
        placement="left"
        centerComponent={{ text: 'Grocery List', style: { color: '#fff', fontSize: 20 } }}
        rightComponent={{ text: 'Clear All', style: { paddingRight: 2, fontSize: 15 }, onPress: () => { this._clearAllConfirmation() } }}
        containerStyle={{ backgroundColor: 'green', justifyContent: 'space-around' }}
      > 
      </Header>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);