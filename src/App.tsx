import React from 'react';
import {ScreenTodo} from './components/ScreenTodo';
import 'react-native-get-random-values';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenLogin} from './components/ScreenLogin';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {StartScreen} from './components/StartScreen';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  );
};

export default App;
