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
  name: 'library',
  properties: {
    title: 'string',
    id: 'string',
    author: 'string',
    category: 'string',
  },
};
import Colors from '../welcome/NewAppScreen/components/Colors';
const Realm = require('realm');

// function addBook(new_title, new_id, new_author, new_category) {
//   Realm.open({
//     schema: [BookSchema],
//   }).then(realm => {
//     realm.write(() => {
//       realm.create('library', {
//         title: new_title,
//         id: new_id,
//         author: new_author,
//         category: new_category,
//       });
//     });
//     realm.close();
//   });
// }

// function searchBook(title, id, author, category) {
//   const title_filter = title ? 'title = ' + title : true;
//   const id_filter = id ? 'id = ' + id : true;
//   const author_filter = author ? 'author = ' + author : true;
//   const category_filter = category ? 'category = ' + category : true;

//   Realm.open({
//     schema: [BookSchema],
//   }).then(realm => {
//     const books = realm
//       .objects('library')
//       .filtered(title_filter)
//       .filtered(id_filter)
//       .filtered(author_filter)
//       .filtered(category_filter);
//     // for (let p of books) {
//     //   console.log(`${p.title}`);
//     // }
//     realm.close();
//     return books;
//   });
// }

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {realm: null};
  }

  componentDidMount() {
    Realm.open({schema: [BookSchema]}).then(realm => {
      realm.write(() => {
        realm.create('library', {
          title: 'Gone',
          id: '001',
          author: 'Mitchel',
          category: '小说',
        });
        // realm.create('library', {
        //   title: '朝花夕拾',
        //   id: '002',
        //   author: '鲁迅',
        //   category: '散文',
        // });
        // realm.create('library', {
        //   title: '杂的文',
        //   id: '003',
        //   author: '韩寒',
        //   category: '杂文',
        // });
        // realm.create('library', {
        //   title: '彼岸花',
        //   id: '004',
        //   author: '安妮宝贝',
        //   category: '散文',
        // });
        // realm.create('library', {
        //   title: '呐喊',
        //   id: '005',
        //   author: '鲁迅',
        //   category: '小说',
        // });
        // realm.create('library', {
        //   title: '三闲集',
        //   id: '006',
        //   author: '鲁迅',
        //   category: '杂文',
        // });
        // realm.create('library', {
        //   title: '眠空',
        //   id: '007',
        //   author: '安妮宝贝',
        //   category: '小说',
        // });
        // realm.create('library', {
        //   title: '匆匆',
        //   id: '008',
        //   author: '朱自清',
        //   category: '散文',
        // });
        // realm.create('library', {
        //   title: '背影',
        //   id: '009',
        //   author: '朱自清',
        //   category: '小说',
        // });
      });
      this.setState({realm});
      // realm.close();
    });
  }

  componentWillUnmount() {
    // Close the realm if there is one open.
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }
  render() {
    const info = this.state.realm
      ? this.state.realm.objects('library').length
      : 'loading';
    return (
      <SafeAreaView>
        <View>
          {/* {this.state.realm.objects('library').map((item, index) => {
        return (
          <React.Fragment key={index}>
            <View style={styles.separator} />
            <Text style={styles.link}>{item.title}</Text>
            <Text style={styles.description}>{item.author}</Text>
          </React.Fragment>
        );
      })} */}
          {/* <Text>{this.state.realm.objects('library').length}</Text> */}
          <Text>{info}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

// Realm.open({schema: [BookSchema]}).then(realm => {
//   realm.write(() => {
//     realm.create('library', {
//       title: 'Gone',
//       id: '001',
//       author: 'Mitchel',
//       category: '小说',
//     });
//     realm.create('library', {
//       title: '朝花夕拾',
//       id: '002',
//       author: '鲁迅',
//       category: '散文',
//     });
//     realm.create('library', {
//       title: '杂的文',
//       id: '003',
//       author: '韩寒',
//       category: '杂文',
//     });
//     realm.create('library', {
//       title: '彼岸花',
//       id: '004',
//       author: '安妮宝贝',
//       category: '散文',
//     });
//     realm.create('library', {
//       title: '呐喊',
//       id: '005',
//       author: '鲁迅',
//       category: '小说',
//     });
//     realm.create('library', {
//       title: '三闲集',
//       id: '006',
//       author: '鲁迅',
//       category: '杂文',
//     });
//     realm.create('library', {
//       title: '眠空',
//       id: '007',
//       author: '安妮宝贝',
//       category: '小说',
//     });
//     realm.create('library', {
//       title: '匆匆',
//       id: '008',
//       author: '朱自清',
//       category: '散文',
//     });
//     realm.create('library', {
//       title: '背影',
//       id: '009',
//       author: '朱自清',
//       category: '小说',
//     });
//   });
//   realm.close();
// });

// console.log(searchBook('杂的文'));
// export {addBook, searchBook};

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
