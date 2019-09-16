import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Platform } from '@unimodules/core';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  addButton: {
    fontSize: 15
  }
});

// NOTE: This was developed using an ANDROID emulator. IOS results may vary
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

class AppInput extends React.Component {

 _handleInputChange(inputText) {
   this.props.setFormText(inputText);
 }

  _addListItem() {
    const inputText = this.props.formInput.formText;
    const itemName = inputText != undefined ? inputText : undefined;
    if (itemName) {
      this.props.addItemToList(itemName);
      this.props.clearFormText();
      this.textInput.current.clear();
    } else {
      return;
    }
  }

  textInput = React.createRef();

  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <Input
          ref={this.textInput}
          placeholder="Enter Item Name"
          onChangeText={(text) => this._handleInputChange(text)}
        />
        <Button
          style={styles.addButton}
          title="Add Item"
          type="solid"
          onPress={() => this._addListItem()}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInput);