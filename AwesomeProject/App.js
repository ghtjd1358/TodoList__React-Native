import { Provider } from 'react-redux';
import MainScreen from './screens/MainScreen';
import React from 'react';
import store from './redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import app from './firebase';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen options={{headerShown : false}} name='Main' component={MainScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
