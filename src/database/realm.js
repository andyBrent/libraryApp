import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
const BookSchema = {
  name: 'Library',
  properties: {
    title: 'string',
    id: 'string',
    author: 'string',
    category: 'string',
  },
};
import Colors from '../welcome/NewAppScreen/components/Colors';
import Showresult from './showResult';

const Realm = require('realm');

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realm: null,
      books: null,
    };
  }

  addBook(new_title, new_id, new_author, new_category) {
    Realm.open({
      schema: [BookSchema],
    }).then(realm => {
      realm.write(() => {
        realm.create('Library', {
          title: new_title,
          id: new_id,
          author: new_author,
          category: new_category,
        });
      });
    });
  }

  createFilter(title, id, author, category) {
    const title_filter = title ? 'title = ' + JSON.stringify(title) : '';
    const id_filter = id ? 'id = ' + JSON.stringify(id) : '';
    const author_filter = author ? 'author = ' + JSON.stringify(author) : '';
    // eslint-disable-next-line prettier/prettier
    const category_filter = category ? 'category = ' + JSON.stringify(category) : '';
    let filter = '';
    let and = false;
    for (let u of [title_filter, id_filter, author_filter, category_filter]) {
      if (u !== '' && and === true) {
        filter = filter + ' AND ' + u;
      }
      if (u !== '' && and === false) {
        filter = filter + u;
        and = true;
      }
    }
    return filter;
  }

  componentDidMount() {
    Realm.open({
      schema: [BookSchema],
    }).then(realm => {
      this.setState({realm});
    });
  }

  componentWillUnmount() {
    this.setState({books: null});
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  render() {
    let realm = this.state.realm;
    if (this.props.add || this.props.delete === true) {
      return <Text style={styles.pleaseEnterText}>请输入</Text>;
    }
    if (this.props.searchAll === true) {
      this.state.books = realm.objects('Library');
    }
    const filter = this.createFilter(
      this.props.title,
      this.props.id,
      this.props.author,
      this.props.category,
    );
    const filter_info = filter
      .replace(/id/g, '书本编号')
      .replace(/title/g, '书籍名称')
      .replace(/author/g, '作者名称')
      .replace(/category/g, '书籍类别')
      .replace(/AND/g, ' 和 ');
    const info = filter.length === 0 ? '请输入' : '查询条件为\n' + filter_info;
    const total_num = realm ? realm.objects('Library').length : '0';
    let filter_num =
      filter.length === 0
        ? total_num
        : realm.objects('Library').filtered(filter).length;
    if (filter_num !== total_num && filter_num > 0) {
      this.state.books = realm.objects('Library').filtered(filter);
    } else if (filter_num !== total_num && filter_num === 0) {
      this.state.books = null;
    }

    return (
      <SafeAreaView>
        <View style={styles.pleaseEnterView}>
          <Text style={styles.pleaseEnterText}>{info}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.separator} />
          <View style={styles.linkContainer}>
            <Text style={styles.link}>书籍名称</Text>
            <Text style={styles.link}>书本编号</Text>
            <Text style={styles.link}>作者名称</Text>
            <Text style={styles.link}>书籍类别</Text>
          </View>
          <View style={styles.separator} />
          <Showresult books={this.state.books} />
        </View>
        <View style={styles.container}>
          <Text style={styles.number}>书目总数为：{total_num}</Text>
          <Text style={styles.number}>共查到{filter_num}条信息</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  pleaseEnterView: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pleaseEnterText: {
    fontSize: 20,
    fontWeight: '200',
  },
  link: {
    flex: 2,
    fontSize: 19,
    fontWeight: '400',
  },
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
  },
  number: {
    fontSize: 12,
    fontWeight: '300',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 14,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});
