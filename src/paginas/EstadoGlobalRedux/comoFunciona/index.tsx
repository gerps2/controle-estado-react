import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { alternarTema } from '../temaSlice';
import { RootState } from '../store';

const ComoFunciona: React.FC = () => {
  const tema = useSelector((state: RootState) => state.tema.tema);
  const dispatch = useDispatch();

  return (
    <div style={{ 
      backgroundColor: tema === 'claro' ? '#f4f4f9' : '#333',
      color: tema === 'claro' ? '#333' : '#f4f4f9',
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1>Exemplo de Estado Global com Redux</h1>
      <p>O tema atual é: <strong>{tema}</strong></p>
      <button onClick={() => dispatch(alternarTema())} style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: tema === 'claro' ? '#333' : '#f4f4f9',
        color: tema === 'claro' ? '#f4f4f9' : '#333',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease'
      }}>
        Alternar Tema
      </button>
      
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: tema === 'claro' ? '#fff' : '#444',
        color: tema === 'claro' ? '#333' : '#f4f4f9',
        borderRadius: '8px',
        textAlign: 'left',
        maxWidth: '800px',
        margin: '40px auto'
      }}>
        <h2>Como funciona essa implementação?</h2>
        <p>
          Este exemplo utiliza o <strong>Redux</strong> para gerenciar o estado global do tema da aplicação, que pode ser "claro" ou "escuro".
          O Redux permite que o estado seja gerenciado de maneira centralizada e acessível a partir de qualquer componente conectado à store.
        </p>
        <h3>Passos principais da implementação:</h3>
        <ol>
          <li>
            <strong>Criação do Slice:</strong> Um slice é criado usando <code>createSlice</code> do Redux Toolkit. Ele define o estado inicial e as ações/reducers que alteram esse estado.
          </li>
          <li>
            <strong>Configuração da Store:</strong> A store é configurada usando <code>configureStore</code>, combinando todos os slices da aplicação. No nosso caso, temos apenas o slice de tema.
          </li>
          <li>
            <strong>Consumo do Estado:</strong> No componente <code>ComoFunciona</code>, usamos <code>useSelector</code> para acessar o estado do tema e <code>useDispatch</code> para despachar a ação de alternância do tema.
          </li>
        </ol>
        <h3>Benefícios do Redux:</h3>
        <p>
          O Redux é uma poderosa ferramenta para gerenciar estados complexos em aplicações maiores. Ele permite uma arquitetura previsível e centralizada, facilitando o rastreamento de estados e a manutenção do código.
        </p>
      </div>
    </div>
  );
};

export default ComoFunciona;
