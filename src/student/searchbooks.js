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
const Realm = require('realm');

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {realm: null};
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
      realm.write(() => {
        realm.create('Library', {
          title: 'Gone',
          id: '001',
          author: 'Mitchel',
          category: '小说',
        });
        realm.create('Library', {
          title: '朝花夕拾',
          id: '002',
          author: '鲁迅',
          category: '散文',
        });
        realm.create('Library', {
          title: '杂的文',
          id: '003',
          author: '韩寒',
          category: '杂文',
        });
        realm.create('Library', {
          title: '彼岸花',
          id: '004',
          author: '安妮宝贝',
          category: '散文',
        });
        realm.create('Library', {
          title: '呐喊',
          id: '005',
          author: '鲁迅',
          category: '小说',
        });
        realm.create('Library', {
          title: '三闲集',
          id: '006',
          author: '鲁迅',
          category: '杂文',
        });
        realm.create('Library', {
          title: '眠空',
          id: '007',
          author: '安妮宝贝',
          category: '小说',
        });
        realm.create('Library', {
          title: '匆匆',
          id: '008',
          author: '朱自清',
          category: '散文',
        });
        realm.create('Library', {
          title: '背影',
          id: '009',
          author: '朱自清',
          category: '小说',
        });
      });
      this.setState({realm});
    });
  }

  componentWillUnmount() {
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  render() {
    let realm = this.state.realm;
    const filter = this.createFilter(
      this.props.title,
      this.props.id,
      this.props.author,
      this.props.category,
    );

    const info = filter.length === 0 ? '请输入' : '查询语句为' + filter;
    const total_num = realm ? realm.objects('Library').length : '0';
    let filter_num =
      filter.length === 0
        ? total_num
        : realm.objects('Library').filtered(filter).length;
    if (filter_num !== total_num && filter_num > 0) {
      var books = realm.objects('Library').filtered(filter);
    }

    return (
      <SafeAreaView>
        <View style={styles.pleaseEnterView}>
          <Text style={styles.pleaseEnterText}>{info}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.separator} />
          accessibilityRole={'button'}
          style={styles.linkContainer}><Text style={styles.link}>书籍名称</Text>
          <Text style={styles.link}>书本编号</Text>
          <Text style={styles.link}>作者名称</Text>
          <Text style={styles.link}>书籍类别</Text>
          <View style={styles.separator} />
          {books.map((item, index) => {
            <React.Fragment key={index}>
              <View style={styles.separator} />
              <TouchableOpacity
                accessibilityRole={'button'}
                onPress={() => openURLInBrowser(item.link)}
                style={styles.linkContainer}>
                <Text style={styles.link}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            </React.Fragment>;
          })}
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
    fontSize: 15,
    fontWeight: '300',
  },
  link: {
    flex: 2,
    fontSize: 16,
    fontWeight: '400',
  },
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
