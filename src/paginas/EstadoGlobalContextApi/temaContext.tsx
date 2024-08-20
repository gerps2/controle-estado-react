import { createContext, useContext } from 'react';

export type Tema = 'claro' | 'escuro';

export interface TemaContextoProps {
  tema: Tema;
  alternarTema: () => void;
}

export const TemaContexto = createContext<TemaContextoProps | undefined>(undefined);

export const useTema = (): TemaContextoProps => {
  const context = useContext(TemaContexto);
  if (!context) {
    throw new Error('useTema deve ser usado dentro de um ProvedorTema');
  }
  return context;
};
