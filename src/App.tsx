import React from 'react';
import {ScreenTodo} from './components/ScreenTodo';
import 'react-native-get-random-values';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenLogin} from './components/ScreenLogin';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Todo"
          component={ScreenTodo}
          options={{
            tabBarIcon: ({size, color}) => {
              return <FontAwesomeIcon icon={faCoffee} size={15} />;
            },
          }}
        />
        <Tab.Screen name="Login" component={ScreenLogin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
