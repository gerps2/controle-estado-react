import { createSlice } from '@reduxjs/toolkit';

export type Tema = 'claro' | 'escuro';

interface TemaState {
  tema: Tema;
}

const initialState: TemaState = {
  tema: 'claro',
};

const temaSlice = createSlice({
  name: 'tema',
  initialState,
  reducers: {
    alternarTema(state) {
      state.tema = state.tema === 'claro' ? 'escuro' : 'claro';
    },
  },
});

export const { alternarTema } = temaSlice.actions;
export default temaSlice.reducer;
