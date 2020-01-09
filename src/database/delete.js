import React, {Component} from 'react';
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
export default class DeleteAll extends Component {
  componentDidMount() {
    Realm.open({
      schema: [BookSchema],
    }).then(realm => {
      let allBooks = realm.objects('Library');
      realm.delete(allBooks);
      realm.close();
    });
  }
}
