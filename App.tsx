import React from 'react';
import RootRouter from './src/router';
import {Provider} from 'react-redux';
import store from './src/store/store';

const App = () => {
  return <RootRouter />;
};

export default App;
