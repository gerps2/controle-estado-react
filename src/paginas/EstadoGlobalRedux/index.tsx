import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ComoFunciona from './comoFunciona';

const EstadoGlobalRedux: React.FC = () => {
  return (
    <Provider store={store}>
      <ComoFunciona />
    </Provider>
  );
};

export default EstadoGlobalRedux  ;
