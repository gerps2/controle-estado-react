import React, { useReducer, useState, useEffect } from 'react';

interface State {
  input: string;
  resultado: number | null;
}

type Action =
  | { type: 'SET_INPUT'; payload: string }
  | { type: 'CALCULAR' }
  | { type: 'LIMPAR' };

const initialState: State = {
  input: '',
  resultado: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, input: action.payload };
    case 'CALCULAR':
      try {
        return { ...state, resultado: eval(state.input) };
      } catch {
        return { ...state, resultado: null };
      }
    case 'LIMPAR':
      return { input: '', resultado: null };
    default:
      return state;
  }
};

const Calculadora: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [history, setHistory] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_INPUT', payload: e.target.value });
  };

  const calcularResultado = () => {
    dispatch({ type: 'CALCULAR' });
  };

  const limpar = () => {
    dispatch({ type: 'LIMPAR' });
  };

  useEffect(() => {
    if (state.resultado !== null) {
      setHistory([...history, `${state.input} = ${state.resultado}`]);
    }
  }, [state.resultado]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('calcHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calcHistory', JSON.stringify(history));
  }, [history]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Calculadora Melhorada com React Hooks</h3>
      <input
        type="text"
        value={state.input}
        onChange={handleInputChange}
        placeholder="Digite a expressão"
        style={{ padding: '10px', width: '80%', marginBottom: '10px', fontSize: '18px' }}
      />
      <br />
      <button onClick={calcularResultado} style={{ padding: '10px 20px', marginRight: '10px', fontSize: '16px' }}>
        Calcular
      </button>
      <button onClick={limpar} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Limpar
      </button>
      <div style={{ marginTop: '20px' }}>
        {state.resultado !== null && <h4>Resultado: {state.resultado}</h4>}
      </div>
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <h4>Histórico:</h4>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculadora;