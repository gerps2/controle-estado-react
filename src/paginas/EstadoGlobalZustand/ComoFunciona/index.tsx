import React from 'react';
import { useTemaStore } from '../useTemaStore';

const ComoFunciona: React.FC = () => {
  const tema = useTemaStore((state) => state.tema);
  const alternarTema = useTemaStore((state) => state.alternarTema);

  return (
    <div style={{ 
      backgroundColor: tema === 'claro' ? '#f4f4f9' : '#333',
      color: tema === 'claro' ? '#333' : '#f4f4f9',
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh'
    }}>
      <h1>Exemplo de Estado Global com Zustand</h1>
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
          Este exemplo utiliza o <strong>Zustand</strong> para gerenciar o estado global do tema da aplicação, que pode ser "claro" ou "escuro".
          Zustand é uma biblioteca leve que permite a criação de uma store simples e eficaz, usando hooks para acessar e alterar o estado.
        </p>
        <h3>Passos principais da implementação:</h3>
        <ol>
          <li>
            <strong>Criação da Store:</strong> A store é criada usando <code>create</code> de Zustand, definindo o estado inicial do tema e uma função para alternar o tema.
          </li>
          <li>
            <strong>Consumo da Store:</strong> No componente <code>ComoFunciona</code>, usamos o hook <code>useTemaStore</code> para acessar o estado do tema e a função de alternância.
          </li>
        </ol>
        <h3>Benefícios do Zustand:</h3>
        <p>
          Zustand é uma solução simples e poderosa para gerenciamento de estado em aplicações React. Ele é fácil de configurar e pode ser escalado conforme necessário, mantendo a simplicidade e performance.
        </p>
      </div>
    </div>
  );
};

export default ComoFunciona;
