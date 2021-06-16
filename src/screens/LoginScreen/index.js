import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from '../../utils/connect';
import Header from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Login({ navigation, login, dataLoading, dispatch }) {
  return (
    <View style={styles.container}>
      <Header title={'Login'} />
      <Button style={styles.fabButton} title="Forget Password" />
      <TouchableOpacity
        style={styles.fabButton}
        title="List"
        onPress={() => navigation.goBack()}
      />
    </View>
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
    backgroundColor: 'yellow',
    borderRadius: 10,
    width: 200,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 60,
  },
});

export default connect(({ login, loading }) => ({
  login,
  loading: loading.login,
}))(Login);
