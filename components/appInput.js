import React from 'react';
import { connect } from 'react-redux';
import { View, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as groceryActions from '../redux/actions/groceryList';
import * as formActions from '../redux/actions/formInput';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setFormText: (itemText) => dispatch(formActions.setFormText(itemText)),
  clearFormText: () => dispatch(formActions.clearFormText()),
  addItemToList: (itemName) => dispatch(groceryActions.addItemToList(itemName))
});

class AppInput extends React.Component {

 _handleInputChange(inputText) {
   this.props.setFormText(inputText);
 }

  _addListItem() {
    const inputText = this.props.formInput.formText;
    const itemName = inputText ? inputText : '' || undefined;
    this.props.addItemToList(itemName);
    this.props.clearFormText();
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