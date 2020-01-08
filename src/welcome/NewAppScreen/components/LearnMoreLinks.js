'use strict';
import Colors from './Colors';
import type {Node} from 'react';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const links = [
  {
    type: 0,
    title: '学生或教师',
    link: 'https://facebook.github.io/react-native/docs/tutorial',
    description: '搜索书目、查看书籍状态、借阅或购买',
  },
  {
    type: 1,
    title: '图书馆管理员',
    link: 'https://facebook.github.io/react-native/docs/style',
    description: '更新数据库、查看书目状态、查看借阅报告',
  },
  {
    type: 2,
    title: '数据库维护人员',
    link: '#',
    description: '维护数据库',
  },
  {
    type: 3,
    title: '了解更多',
    link: 'http://www.lib.shufe.edu.cn/lib/Index.html',
    description: '点击进入上海财经大学英贤图书馆官网',
  },
];

const LinkList = (): Node => (
  <View style={styles.container}>
    {links.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => openURLInBrowser(item.link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </View>
);

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

export default LinkList;
