/*
  数据库增删
 */
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
import {BookSchema} from '../database/Schemas';
import Colors from '../welcome/NewAppScreen/components/Colors';
import Showresult from './showResult';

const Realm = require('realm');

export default class ReactAD extends Component {
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
  deleteBook(filter) {
    Realm.open({
      schema: [BookSchema],
    }).then(realm => {
      realm.write(() => {
        let book = realm.objects('Library').filtered(filter);
        realm.delete(book);
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
    if (!(this.props.add || this.props.delete)) {
      return (
        <View style={styles.pleaseEnterView}>
          <Text style={styles.pleaseEnterText}>请输入</Text>
        </View>
      );
    } else if (
      !(
        this.props.title &&
        this.props.id &&
        this.props.author &&
        this.props.category
      )
    ) {
      return (
        <View style={styles.pleaseEnterView}>
          <Text style={styles.pleaseEnterText}>信息输入不完全</Text>
        </View>
      );
    }
    let realm = this.state.realm;
    if (this.props.add === true) {
      this.addBook(
        this.props.title,
        this.props.id,
        this.props.author,
        this.props.category,
      );
      const new_filter = this.createFilter(
        this.props.title,
        this.props.id,
        this.props.author,
        this.props.category,
      );
      this.state.books = realm.objects('Library').filtered(new_filter);

      return (
        <SafeAreaView>
          <View style={styles.pleaseEnterView}>
            <Text style={styles.pleaseEnterText}>新建成功</Text>
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
            <TouchableOpacity
              accessibilityRole={'button'}
              // onPress={() => openURLInBrowser(book.link)}}
            >
              <View style={styles.linkContainer}>
                <Text style={styles.link}>{this.props.title}</Text>
                <Text style={styles.link}>{this.props.id}</Text>
                <Text style={styles.link}>{this.props.author}</Text>
                <Text style={styles.link}>{this.props.category}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
          </View>
        </SafeAreaView>
      );
    }
    if (this.props.delete === true) {
      const filter = this.createFilter(
        this.props.title,
        this.props.id,
        this.props.author,
        this.props.category,
      );
      let filter_num =
        filter.length === 0
          ? 0
          : realm.objects('Library').filtered(filter).length;
      if (filter_num === 0) {
        return (
          <View style={styles.pleaseEnterView}>
            <Text style={styles.pleaseEnterText}>找不到书籍</Text>
          </View>
        );
      } else {
        this.deleteBook(filter);
        return (
          <View style={styles.pleaseEnterView}>
            <Text style={styles.pleaseEnterText}>已删除</Text>
          </View>
        );
      }
    }
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
    fontWeight: '800',
  },
  link: {
    flex: 2,
    fontSize: 19,
    fontWeight: '400',
  },
  container: {
    marginTop: 10,
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
