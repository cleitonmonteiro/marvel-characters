import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

import {persistor, store} from '../redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

const AllTheProviders = ({children}) => {
  const inset = {
    frame: {x: 0, y: 0, width: 0, height: 0},
    insets: {top: 0, left: 0, right: 0, bottom: 0},
  };

  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
