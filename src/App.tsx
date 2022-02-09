import React from 'react';
import 'react-native-get-random-values';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {StackNavigation} from './components/StackNavigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
