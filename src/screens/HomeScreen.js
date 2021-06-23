import React, { useEffect } from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'

import Header from '../components/Header'
import { connect } from '../utils/connect'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import * as RootNavigation from '../navigator/RootNavigation'
import NavBar from '../components/NavBar'

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

function HomeScreen({ home, dispatch }) {
  useEffect(() => {
    dispatch({
      type: 'home/currentUser',
    })
  }, [dispatch])

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title={'Home'} />
        <ListView home={home} />
        <NavBar />
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
  dataLoading: loading.effects['home/showList'],
}))(HomeScreen)
