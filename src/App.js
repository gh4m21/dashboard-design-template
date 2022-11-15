import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Views from './layouts/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Views />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
