import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

import RootContainer from './src/navigation/RootContainer';
import './src/i18n';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'redux-persist failed to create sync storage. falling back to noop storage. ',
]);
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
