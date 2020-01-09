import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
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
const Realm = require('realm');

export default class Test extends Component {
  constructor(props) {
    super(props);
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
      realm.close();
    });
  }

  searchBook(title, id, author, category) {
    const title_filter = title ? 'title = ' + title : '';
    const id_filter = id ? 'id = ' + id : '';
    const author_filter = author ? 'author = ' + author : '';
    const category_filter = category ? 'category = ' + category : '';
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

    Realm.open({
      schema: [BookSchema],
    }).then(realm => {
      const books = realm.objects('Library').filtered(filter);
      return books;
    });
    // return filter;
  }

  render() {
    const books = this.searchBook(
      this.props.title,
      this.props.id,
      this.props.author,
      this.props.category,
    );
    const info = books ? ' ' + books.length : 'Loading...';
    return (
      <SafeAreaView>
        <View>
          <Text>{info}</Text>
        </View>
      </SafeAreaView>
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
