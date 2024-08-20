import React from 'react';
import { useTema } from '../temaContext';

const ComoFunciona: React.FC = () => {
  const { tema, alternarTema } = useTema();

  return (
    <div style={{ 
      backgroundColor: tema === 'claro' ? '#f4f4f9' : '#333',
      color: tema === 'claro' ? '#333' : '#f4f4f9',
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1>Exemplo de Estado Global com Context API</h1>
      <p>O tema atual é: <strong>{tema}</strong></p>
      <button onClick={alternarTema} style={{
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
          Este exemplo utiliza o <strong>Context API</strong> do React para gerenciar o estado global do tema da aplicação, que pode ser "claro" ou "escuro". 
          A Context API permite que você compartilhe valores entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes.
        </p>
        <h3>Passos principais da implementação:</h3>
        <ol>
          <li>
            <strong>Criação do Contexto:</strong> O contexto é criado usando <code>React.createContext</code> e define o tipo do estado que será compartilhado (neste caso, o tema) e a função que alterna o tema.
          </li>
          <li>
            <strong>Provedor de Contexto:</strong> O provedor de contexto, <code>ProvedorTema</code>, encapsula os componentes que precisam acessar o estado global. Ele usa <code>useState</code> para gerenciar o estado do tema internamente.
          </li>
          <li>
            <strong>Consumo do Contexto:</strong> No componente que consome o contexto, <code>ComoFunciona</code>, usamos o hook <code>useTema</code> para acessar o estado do tema e a função de alternância. O tema é aplicado dinamicamente ao estilo do componente, e o botão permite alternar entre "claro" e "escuro".
          </li>
        </ol>
        <h3>Benefícios do Context API:</h3>
        <p>
          A Context API é uma solução eficaz para compartilhar dados que são usados por muitos componentes em diferentes níveis da árvore de componentes, sem a necessidade de "prop drilling" (passagem de props por vários níveis). 
          Isso torna o código mais limpo e mais fácil de manter, especialmente em aplicações maiores.
        </p>
      </div>
    </div>
  );
};

export default ComoFunciona;