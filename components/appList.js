import React from 'react'
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import * as groceryActions from '../redux/actions/groceryList';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  removeItemFromList: (id) => dispatch(groceryActions.removeItemFromList(id))
});

const styles = StyleSheet.create({
  rowFrontText: {
    fontSize: 20
  },
  rowFront: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  rowBack: {
    height: 50,
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  rowBackText: {
    fontSize: 20,
    color: 'white'
  }
}); 

class AppList extends React.Component {

  render() {
    return (
      <SwipeListView
        useFlatList
        data={this.props.groceryList}
        keyExtractor={item => item.itemId.toString()}
        renderItem={({item, rowMap}) => (
          <View style={styles.rowFront}>
            <Text style={styles.rowFrontText}>{item.itemName}</Text>
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
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList);