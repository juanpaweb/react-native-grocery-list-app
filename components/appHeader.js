import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

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

export default AppHeader;