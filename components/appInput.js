import React from 'react';
import { connect } from 'react-redux';
import { View, KeyboardAvoidingView, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as groceryActions from '../redux/actions/groceryList';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setItemText: (itemText) => dispatch(groceryActions.setItemText(itemText)),
  addItemToList: (itemName) => dispatch(groceryActions.addItemToList(itemName))
});

class AppInput extends React.Component {

 _handleInputChange(inputText) {
   this.props.setItemText(inputText);
 }

  _addListItem() {
    console.log(this.props.groceryList.inputText);
  }

  render() {
    return (
      <View>
        <KeyboardAvoidingView>
          <Input
            placeholder="Enter Item Name"
            onChangeText={(text) => this._handleInputChange(text)}
          />
          <Button
            title="Add Item"
            type="solid"
            onPress={() => this._addListItem()}
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInput);