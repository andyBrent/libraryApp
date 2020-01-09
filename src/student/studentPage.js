import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import RealmDB from '../database/realm';

const Realm = require('realm');
const BookSchema = {
  name: 'Library',
  properties: {
    title: 'string',
    id: 'string',
    author: 'string',
    category: 'string',
  },
};

export default class StudentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      id: '',
      author: '',
      category: '',
      submit_title: '',
      submit_id: '',
      submit_author: '',
      submit_category: '',
    };
    this._onSearch = this._onSearch.bind(this);
  }
  static navigationOptions = {
    title: '学生/教师端',
  };
  _onSearch = () => {
    // this.props.addTodo(this.state.input);
    this.setState({
      submit_title: this.state.title,
      submit_id: this.state.id,
      submit_author: this.state.author,
      submit_category: this.state.category,
      title: '',
      id: '',
      author: '',
      category: '',
    });
  };
  _onDelte = () => {
    Realm.open({
      schema: [BookSchema],
    }).then(realm => {
      let allBooks = realm.objects('Library');
      realm.write(() => {
        realm.delete(allBooks);
      });

      realm.close();
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
          <Button title="查询" onPress={this._onSearch} />
          <Button title="清除全部数据" onPress={this._onDelte} />
        </View>
        <RealmDB
          title={this.state.submit_title}
          id={this.state.submit_id}
          author={this.state.submit_author}
          category={this.state.submit_category}
        />
        <View style={styles.welcome}>
          <Button onPress={() => navigate('Welcome')} title="回到首页" />
        </View>
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
