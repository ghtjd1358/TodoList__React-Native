import { Provider } from 'react-redux';
import MainScreen from './screens/MainScreen';
import React from 'react';
import store from './redux/store';


export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainScreen/>
      </Provider>
    </>
  );
}
