import React from 'react'
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

class AppList extends React.Component {

  render() {
    return (
      <View>
        <FlatList
          data={this.props.groceryList}
          keyExtractor={item => item.itemId.toString()}
          renderItem={({item}) => <Text>{item.itemName}</Text>}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList);