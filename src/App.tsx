import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {ScreenTodo} from './components/ScreenTodo';
import 'react-native-get-random-values';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ScreenTodo />
    </Provider>
  );
};

export default App;
