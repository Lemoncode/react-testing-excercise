import * as React from 'react';
import { Provider } from 'react-redux';
import { RouterComponent } from 'core/router';
import { store } from 'core/store';

export const App = () => (
  <Provider store={store}>
    <RouterComponent />
  </Provider>
);
