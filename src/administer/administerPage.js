import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class AdministerScreen extends Component {
  static navigationOptions = {
    title: '管理员端',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.backToWelcome}>
        <Text>管理员 你好！</Text>
        <Button onPress={() => navigate('Welcome')} title="回到首页" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backToWelcome: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
