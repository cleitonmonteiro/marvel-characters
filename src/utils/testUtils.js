import React from 'react';
import {render as rtlRender} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

import {store as ReduxStore} from '../redux/store';

function render(
  ui,
  {preloadedState, store = ReduxStore, ...renderOptions} = {},
) {
  function Wrapper({children}) {
    return (
      <NativeBaseProvider>
        <Provider store={store}>{children}</Provider>
      </NativeBaseProvider>
    );
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react-native';
export {render};
