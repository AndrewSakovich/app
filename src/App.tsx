import React from 'react';
import {Provider, useSelector} from 'react-redux';
import {store} from './redux/store';
import {ScreenTodo} from './components/ScreenTodo';
import 'react-native-get-random-values';

const App = () => {
  return (
    <Provider store={store}>
      <ScreenTodo />
    </Provider>
  );
};

export default App;
