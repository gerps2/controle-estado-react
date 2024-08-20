import React from 'react';
import ProvedorTema from './provedorTema';
import ComoFunciona from './comoFunciona';

const EstadoGlobalContextApi: React.FC = () => {
  return (
    <ProvedorTema>
      <ComoFunciona />
    </ProvedorTema>
  );
};

export default EstadoGlobalContextApi;
