import React from 'react';
import {Provider} from 'react-redux';
import Walkthrough from './src/modules/auth/screens/Walkthrough';
import store from './src/store/store';

const App = () => {
  return (
    // <Provider store={store}>
    <Walkthrough />
    // </Provider>
  );
};

export default App;
