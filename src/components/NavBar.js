import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import * as RootNavigation from '../navigator/RootNavigation'
import Icon from '../assets/vectorIcons'

function NavBar() {
  return (
    <View style={styles.fabContainer}>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('Home')}
        style={styles.fabButton}>
        <Text style={styles.button}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('List')}
        style={styles.fabButton}>
        {/*<Icon name="ios-add" color="#fff" size={70} />*/}
        <Icon name="lock" size={18} color="#ff3e00" />
        <Text style={styles.button}>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('Modal')}
        style={styles.fabButton}>
        <Text style={styles.button}>Hi</Text>
        {/*<Ionicons name='ios-add' color='#fff' size={70} />*/}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('Login')}
        style={styles.fabButton}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          AsyncStorage.removeItem('token')
          RootNavigation.push('Login')
        }}
        style={styles.fabButton}>
        <Text style={styles.button}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blueviolet',
  },
  fabContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    // right: 10,
    bottom: 0,
  },
  fabButton: {
    backgroundColor: 'lightyellow',
    // borderRadius: 35,
    flex: 1,
    // width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { color: 'blue', fontWeight: 'bold' },
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

export default NavBar
