import React from 'react';
import { View, Button } from 'react-native';
import { connect } from '../../utils/connect';

const Login = ({ navigation, login, dataLoading, dispatch }) => {
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
      <Button title="Forget Password" />
    </View>
  );
};

export default connect(({ login, loading }) => ({
  login,
  loading: loading.login,
}))(Login);
