import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import RootNavigator from './src/navigation';
import {persistor, store} from './src/redux/store';
import theme from './src/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
