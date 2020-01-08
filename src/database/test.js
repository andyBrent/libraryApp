import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Realm = require('realm');

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {realm: null};
  }

  componentDidMount() {
    Realm.open({
      schema: [{name: 'Dog', properties: {name: 'string'}}],
    }).then(realm => {
      realm.write(() => {
        realm.create('Dog', {name: 'Rex'});
      });
      this.setState({realm});
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
      ? 'Number of dogs in this Realm: ' +
        this.state.realm.objects('Dog').length
      : 'Loading...';

    return (
      <SafeAreaView>
        <View>
          <Text>{info}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
