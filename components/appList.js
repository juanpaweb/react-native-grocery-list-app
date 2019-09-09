import React from 'react'
import { connect } from 'react-redux';
import { View, Text, Animated, StyleSheet, TouchableHighlight } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import * as groceryActions from '../redux/actions/groceryList';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  removeItemFromList: (id) => dispatch(groceryActions.removeItemFromList(id))
});

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  rowBack: {
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
  rowBackText: {
    color: 'white'
  }
}); 

class AppList extends React.Component {

  render() {
    return (
      <View>
        <SwipeListView
          useFlatList
          data={this.props.groceryList}
          keyExtractor={item => item.itemId.toString()}
          renderItem={({item, rowMap}) => (
            <View style={styles.rowFront}>
              <Text>{item.itemName}</Text>
            </View>
          )}
          renderHiddenItem={({item, rowMap}) => (
            <View style={styles.rowBack}>
              <Text style={styles.rowBackText} onPress={() => this.props.removeItemFromList(item.itemId)}>Delete</Text>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList);