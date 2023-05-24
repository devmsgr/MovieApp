import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack';

import './src/i18n';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs(); //Ignore all log notifications
function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthStack />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
