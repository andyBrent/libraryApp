import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../welcome/NewAppScreen//components/Colors';
export default class Showresult extends Component {
  render() {
    if (this.props.books === null) {
      return <View style={styles.separator} />;
    } else {
      let books = this.props.books;
      return (
        <View style={styles.container}>
          {books.map((book, index) => {
            return (
              <React.Fragment key={index}>
                <TouchableOpacity
                  accessibilityRole={'button'}
                  // onPress={() => openURLInBrowser(book.link)}}
                >
                  <View style={styles.linkContainer}>
                    <Text style={styles.link}>{book.title}</Text>
                    <Text style={styles.link}>{book.id}</Text>
                    <Text style={styles.link}>{book.author}</Text>
                    <Text style={styles.link}>{book.category}</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.separator} />
              </React.Fragment>
            );
          })}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 0,
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  link: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: '400',
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});
