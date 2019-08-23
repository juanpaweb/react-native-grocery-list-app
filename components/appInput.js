import React from 'react';
import { connect } from 'react-redux';
import { View, KeyboardAvoidingView } from 'react-native';
import { Input, Button } from 'react-native-elements';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class AppInput extends React.Component {
  render() {
    return (
      <View>
        <KeyboardAvoidingView>
          <Input 
            placeholder="Enter Item Name" 
          />
          <Button
            title="Add Item"
            type="solid"
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppInput);