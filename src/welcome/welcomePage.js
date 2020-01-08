/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from '../NewAppScreen';

export default function Welcome() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>产品介绍</Text>
              <Text style={styles.sectionDescription}>
                在高校中，图书借阅是学生获取知识的一个很重要的途径，所以希望做一个图书管理系统，既能方便学生借书，又能减轻图书馆管理人员的工作负担，高效地完成图书借阅管理工作。
              </Text>
              <Text style={styles.sectionDescription}>
                本产品以上海财经大学英贤图书馆管理系统为蓝本，在此方向上设计基本功能供图书馆管理员以及在校师生使用。
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>功能介绍</Text>
              <Text style={styles.sectionDescription}>
                如果你是在校师生，你可以...
              </Text>
              <Text style={styles.sectionDescriptionList}>·搜集相关图书</Text>
              <Text style={styles.sectionDescriptionList}>·查看图书信息</Text>
              <Text style={styles.sectionDescriptionList}>·借阅或购买图书</Text>
              <Text style={styles.sectionDescription}>
                如果你是在图书馆管理员，你可以...
              </Text>
              <Text style={styles.sectionDescriptionList}>·查看图书信息</Text>
              <Text style={styles.sectionDescriptionList}>·修改图书情况</Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>技术支持</Text>
              <Text style={styles.sectionDescription}>
                本产品以react-native为框架、ECMAScript 6
                为编程语言、realm为数据库进行设计。
              </Text>
              <Text style={styles.sectionDescription}>
                结合数据库原理的相关知识，进行分析需求、概念模型设计、逻辑设计、物理设计等步骤。
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>尝试一下吧</Text>
              <Text style={styles.sectionTry}>请在下方选择您的身份：</Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '400',
    color: Colors.dark,
  },
  sectionDescriptionList: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: '700',
    color: Colors.dark,
  },
  sectionTry: {
    marginTop: 40,
    fontSize: 15,
    fontWeight: '700',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
