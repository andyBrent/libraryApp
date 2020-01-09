import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  placeholder,
} from 'react-native';
// import ShowResult from '../database/showResult';

export default class StudentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  static navigationOptions = {
    title: '学生/教师端',
  };
  updateInput = input => {
    this.setState({input});
  };
  handleClick = () => {
    // this.props.addTodo(this.state.input);
    this.setState({input: ''});
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.hello}>同学/老师 你好!</Text>
        </View>
        <View>
          <Text style={styles.text}>
            请在下面输入您需要寻找的书籍名称、编号、作者名称或者类别
          </Text>
        </View>
        <View style={styles.inputAreaText}>
          <Text>书籍名称</Text>
          <Text>书本编号</Text>
          <Text>作者名称</Text>
          <Text>书籍类别</Text>
        </View>
        <View style={styles.inputAreaTable}>
          <TextInput
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
            style={styles.input}
            placeholder="如：复活"
          />
          <TextInput
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
            style={styles.input}
            placeholder="001-010"
          />
          <TextInput
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
            style={styles.input}
            placeholder="如：莫言"
          />
          <TextInput
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
            style={styles.input}
            placeholder="见注释"
          />
        </View>
        <View>
          <Text style={styles.attention}>
            *注：书籍类别有：小说、散文、杂文、其他四类
          </Text>
          <Button title="查询" onClick={this.handleClick} />
        </View>
        <View style={styles.welcome}>
          <Button onPress={() => navigate('Welcome')} title="回到首页" />
        </View>
        {/* <ShowResult/> */}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  text: {marginTop: 15, fontSize: 13},
  inputAreaText: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputAreaTable: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    marginLeft: 10,
    height: 40,
    width: 80,
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
  },
  attention: {
    marginTop: 15,
    fontSize: 10,
    alignContent: 'space-around',
  },
  hello: {marginTop: 20, fontSize: 20, fontWeight: '900', color: 'black'},
  welcome: {marginTop: 10, flex: 1, alignItems: 'center'},
});
