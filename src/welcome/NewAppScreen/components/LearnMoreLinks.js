'use strict';
import React, {Component} from 'react';
import Colors from './Colors';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class LearnMoreLinks extends Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => navigate('Administer')}
          style={styles.linkContainer}>
          <Text style={styles.link}>{'图书馆管理员'}</Text>
          <Text style={styles.description}>
            {'更新数据库、查看书目状态、查看借阅报告'}
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => navigate('Student')}
          style={styles.linkContainer}>
          <Text style={styles.link}>{'学生或教师'}</Text>
          <Text style={styles.description}>
            {'搜索书目、查看书籍状态、借阅或购买'}
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() =>
            openURLInBrowser('http://www.lib.shufe.edu.cn/lib/Index.html')
          }
          style={styles.linkContainer}>
          <Text style={styles.link}>{'想了解更多'}</Text>
          <Text style={styles.description}>
            {'点击进入上海财经大学英贤图书馆官网'}
          </Text>
        </TouchableOpacity>
        <View style={styles.separator} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});
