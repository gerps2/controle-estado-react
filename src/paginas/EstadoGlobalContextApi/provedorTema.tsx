import React, { useState, ReactNode } from 'react';
import { Tema, TemaContexto } from './temaContext';

interface ProvedorTemaProps {
  children: ReactNode;
}

const ProvedorTema: React.FC<ProvedorTemaProps> = ({ children }) => {
  const [tema, setTema] = useState<Tema>('claro');

  const alternarTema = () => {
    setTema((prevTema: Tema) => (prevTema === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

export default ProvedorTema;
