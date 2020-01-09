import React from 'react';
import AppContainer from './src/common/createNavigator';
import Test from './src/database/realm';

const App: () => React$Node = () => {
  return <AppContainer />;
  // return <Test />;
};

export default App;
