import React from 'react';
import Welcome from './src/welcome/welcomePage';
import AppContainer from './src/common/createNavigator';
const App: () => React$Node = () => {
  // return <Welcome />;
  return <AppContainer />;
};

export default App;
