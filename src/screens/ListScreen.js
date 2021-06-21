import React from 'react'
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import Header from '../components/Header'
import { connect } from '../utils/connect'

function ListView({ home }) {
  const list = home?.data || []
  console.log('hi', home)
  return (
    <View style={styles.listContainer}>
      <Text>Here goes list items</Text>
      <Text>N</Text>
      {list.map(x => (
        <Text key={x.id}>{x.name}</Text>
      ))}
    </View>
  )
}

function ListScreen({ navigation, home, dispatch }) {
  const showList = () => {
    dispatch({
      type: 'home/showList',
    })
    navigation.navigate('List')
  }
  const hideList = () => {
    dispatch({
      type: 'home/hideList',
    })
  }
  // console.log('hello', home);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title={'List'} />
        <ListView home={home} />
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => dispatch({ type: 'home/getToken' })}
            style={styles.fabButton}>
            <Text style={styles.button}>Token</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={hideList} style={styles.fabButton}>
            <Text style={styles.button}>Hide</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showList} style={styles.fabButton}>
            <Text style={styles.button}>Show</Text>
            {/*<Ionicons name='ios-add' color='#fff' size={70} />*/}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Modal')}
            style={styles.fabButton}>
            <Text style={styles.button}>Hi</Text>
            {/*<Ionicons name='ios-add' color='#fff' size={70} />*/}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.fabButton}>
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
  },
  fabContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
  fabButton: {
    backgroundColor: 'blue',
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { color: 'yellow', fontWeight: 'bold' },
  listContainer: {
    backgroundColor: 'yellow',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 50,
  },
})

export default connect(({ home, loading }) => ({
  home,
  dataLoading: loading.effects['home/zhihu'],
}))(ListScreen)
