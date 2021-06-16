import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Header from '../components/Header';
import { connect } from '../utils/connect';

function ListView({ home }) {
  const list = home?.data || [];
  console.log('hi', home);
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: 50,
      }}>
      <Text>Here goes list items</Text>
      <Text>N</Text>
      {list.map(x => (
        <Text key={x}>{x}</Text>
      ))}
    </View>
  );
}

function ListScreen({ navigation, home, dataLoading, dispatch }) {
  const showList = () => {
    dispatch({
      type: 'home/showList',
    });
    navigation.navigate('List');
  };
  const hideList = () => {
    dispatch({
      type: 'home/hideList',
    });
  };
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
            <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Token</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={hideList} style={styles.fabButton}>
            <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Hide</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showList} style={styles.fabButton}>
            <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Show</Text>
            {/*<Ionicons name='ios-add' color='#fff' size={70} />*/}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Modal')}
            style={styles.fabButton}>
            <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Hi</Text>
            {/*<Ionicons name='ios-add' color='#fff' size={70} />*/}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.fabButton}>
            <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
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
});

export default connect(({ home, loading }) => ({
  home,
  dataLoading: loading.effects['home/zhihu'],
}))(ListScreen);
