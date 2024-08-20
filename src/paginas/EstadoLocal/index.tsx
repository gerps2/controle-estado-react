import React from 'react';
import Calculadora from './calculadora';
import ComoFunciona from './comoFunciona';

const EstadoLocal: React.FC = () => {
  return (
    <div>
      <h2>Exemplo de Estado Local com React Hooks</h2>
      <Calculadora />
      <ComoFunciona />
    </div>
  );
};

export default EstadoLocal;
