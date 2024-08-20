import React from 'react';

const ComoFunciona: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: '#f4f4f9',
      color: '#333',
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1>Como Funciona o Estado Local com React Hooks</h1>
      
      <div style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#fff',
        color: '#333',
        borderRadius: '8px',
        textAlign: 'left',
        maxWidth: '800px',
        margin: '40px auto'
      }}>
        <h2>Como funciona essa implementação?</h2>
        <p>
          Neste exemplo, utilizamos vários hooks do React para gerenciar o estado local da calculadora:
        </p>
        <h3>Hooks Utilizados:</h3>
        <ul>
          <li>
            <strong>useReducer:</strong> Utilizado para gerenciar estados mais complexos e ações que alteram várias partes do estado ao mesmo tempo. No caso da calculadora, ele gerencia o input e o resultado.
          </li>
          <li>
            <strong>useState:</strong> Utilizado para armazenar o histórico das operações da calculadora. Isso permite que o histórico seja atualizado de forma independente do restante do estado.
          </li>
          <li>
            <strong>useEffect:</strong> Utilizado para realizar efeitos colaterais, como salvar e carregar o histórico do `localStorage`. Isso garante que o histórico seja persistido mesmo após a recarga da página.
          </li>
        </ul>
        <h3>Benefícios do Estado Local:</h3>
        <p>
          O estado local com React Hooks permite que o componente seja totalmente autocontido, facilitando o desenvolvimento e a manutenção. Ele é ideal para componentes que não precisam compartilhar seu estado com outros componentes da aplicação.
        </p>
      </div>
    </div>
  );
};

export default ComoFunciona;
