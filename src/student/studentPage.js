import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Realm from '../database/realm';

export default class StudentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      id: '',
      author: '',
      category: '',
    };
    this._onPressButton = this._onPressButton.bind(this);
  }
  static navigationOptions = {
    title: '学生/教师端',
  };
  _onPressButton = () => {
    // this.props.addTodo(this.state.input);
    this.setState({
      title: '',
      id: '',
      author: '',
      category: '',
    });
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.hello}>同学/老师 你好!</Text>
        </View>
        <View>
          <Text style={styles.text}>请在下面输入您需要寻找的书籍信息</Text>
        </View>
        <View style={styles.inputAreaText}>
          <Text>书籍名称</Text>
          <Text>书本编号</Text>
          <Text>作者名称</Text>
          <Text>书籍类别</Text>
        </View>
        <View style={styles.inputAreaTable}>
          <TextInput
            onChangeText={title => this.setState({title})}
            value={this.state.title}
            style={styles.input}
            placeholder="如：复活"
          />
          <TextInput
            onChangeText={id => this.setState({id})}
            value={this.state.id}
            style={styles.input}
            placeholder="001-010"
          />
          <TextInput
            onChangeText={author => this.setState({author})}
            value={this.state.author}
            style={styles.input}
            placeholder="如：莫言"
          />
          <TextInput
            onChangeText={category => this.setState({category})}
            value={this.state.category}
            style={styles.input}
            placeholder="见注释"
          />
        </View>
        <View style={styles.attentionView}>
          <Text style={styles.attention}>
            *注：书籍类别有：小说、散文、杂文、其他四类
          </Text>
        </View>
        <View style={styles.inputAreaTable}>
          <Button title="查询" onPress={this._onPressButton} />
        </View>
        <View style={styles.welcome}>
          <Button onPress={() => navigate('Welcome')} title="回到首页" />
        </View>
        <Realm
          title={this.state.title}
          id={this.state.id}
          author={this.state.author}
          category={this.state.category}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  hello: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
  },
  text: {marginLeft: 20, marginTop: 15, fontSize: 13},
  inputAreaText: {
    marginTop: 20,
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
    marginTop: 5,
    marginRight: 10,
    fontSize: 10,
    alignContent: 'flex-end',
  },
  attentionView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  welcome: {marginTop: 10, flex: 1, alignItems: 'center'},
});
