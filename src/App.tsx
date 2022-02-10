import React from 'react';
import 'react-native-get-random-values';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {MainBottonTabNavigation} from './components/MainBottonTabNavigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainBottonTabNavigation />
    </Provider>
  );
};

export default App;
