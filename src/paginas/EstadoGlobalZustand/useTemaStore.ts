import create from 'zustand';

export type Tema = 'claro' | 'escuro';

interface TemaState {
  tema: Tema;
  alternarTema: () => void;
}

export const useTemaStore = create<TemaState>((set) => ({
  tema: 'claro',
  alternarTema: () => set((state) => ({
    tema: state.tema === 'claro' ? 'escuro' : 'claro',
  })),
}));
